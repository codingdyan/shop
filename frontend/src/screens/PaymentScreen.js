import React, { useState } from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps' 
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress){
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
       dispatch(savePaymentMethod(paymentMethod))
       history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
               <Form.Group>
                    <Form.Label as="legend">Select Metod</Form.Label>
                    <Col>
                        <Form.Check type="radio" label="Paypal or Credit Card" id="PayPal" name="paymentMethod" value="PayPal" 
                        checked onChange={(e) => setPaymentMethod(e.target.value)}>
                        </Form.Check>
                        <Form.Check type="radio" label="Capitec Transfer" id="capitec" name="paymentMethod" value="Capitec Transfer" 
                        onChange={(e) => setPaymentMethod(e.target.value)}>
                        </Form.Check>
                        <Form.Check type="radio" label="Cash on Delivery" id="cash" name="paymentMethod" value="Cash on Delivery" 
                        onChange={(e) => setPaymentMethod(e.target.value)}>
                        </Form.Check>
                    </Col>
               </Form.Group>
               <Form.Group className="mt-1">
                    <Button type='submit' varient='primary'>Continue</Button>
               </Form.Group>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
