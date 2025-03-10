import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'
import logoImg from '../../assets/logo.svg'

import { Container } from './styles'

export function OrderHeader() {
  const { cart } = useCart()

  return (
  <Container>
    <Link to='/'>
    <img src={logoImg} alt='Food Commerce' />
    </Link>


    <div>
      <div>
        <h3>Meus pedidos</h3>
        <span>
          <strong>{`${cart.length}` .padStart(2, '00')}</strong> lanche(s)
        </span>
      </div>
      <CartIcon />
    </div>
  </Container>
  )
}

