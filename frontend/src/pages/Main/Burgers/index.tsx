
import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks"
import { useSnack } from "../../../hooks/useSnack";






export default function Burgers() {
  const { burgers } = useSnack()

  return (
  <>
    <Head title="Hambúgueres"   />
    <SnackTitle>Hambúgueres</SnackTitle>
    <Snacks snacks={burgers}></Snacks>
  </>
  )
}
