import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartCheckoutScreen} from '../../modules/cart/screens/CartCheckoutScreen';
import {CartOrderDetailsScreen} from '../../modules/cart/screens/CartOrderDetailsScreen';
import {CartScreen} from '../../modules/cart/screens/CartPageScreen';
import {CartPaymentScreen} from '../../modules/cart/screens/CartPaymentScreen';
import {CartShippingScreen} from '../../modules/cart/screens/CartShippingScreen';

export type CartScreensParamList = {
  CartResume: undefined;
  CartShipping: undefined;
  CartPayment: undefined;
  CartCheckout: undefined;
  CartOrderDetails: undefined;
};

const Cart = createNativeStackNavigator<CartScreensParamList>();

export function CartRouter() {
  return (
    <Cart.Navigator>
      <Cart.Screen name="CartResume" component={CartScreen} />
      <Cart.Screen name="CartShipping" component={CartShippingScreen} />
      <Cart.Screen name="CartPayment" component={CartPaymentScreen} />
      <Cart.Screen name="CartCheckout" component={CartCheckoutScreen} />
      <Cart.Screen name="CartOrderDetails" component={CartOrderDetailsScreen} />
    </Cart.Navigator>
  );
}
