import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
import express, { Express, Request, Response } from "express"

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 9999
const prisma = new PrismaClient()

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  const { message } = req.body

  if (!message) return res.status(400).send({ error: "Message is required" })

  res.send({ message })
})

app.get("/snacks", async (req: Request, res: Response) => {
  const { snack } = req.query

  if (!snack) return res.status(400).send({ error: "Snack is required" })

  // SELECT * FROM Snack WHERE snack = 'drink'
  const snacks = await prisma.snack.findMany({
    where: {
      snack: {
        equals: snack as string,
      },
    },
  })

  res.send(snacks)
})

app.get('/orders/:id', async (req: Request, res: Response) => {
  const { id } = req.params

  const order = await prisma.order.findUnique({
    where:{
      id: +id
    },
   })
  
  if (!order) return res.status(400).send({error: "Order not found"}) 

  res.send(order)
})

app.post('/checkout', async (req: Request, res: Response) => {
  const 
    
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})