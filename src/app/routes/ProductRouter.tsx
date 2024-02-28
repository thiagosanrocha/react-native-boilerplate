import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductDetailsScreen} from '../../modules/catalog/screens/ProductDetailsScreen';
import {ProductListScreen} from '../../modules/catalog/screens/ProductListScreen';

export type ProductScreensParamList = {
  ProductList: undefined;
  ProductDetails: {
    productId: string;
  };
};

const Product = createNativeStackNavigator<ProductScreensParamList>();

export function ProductRouter() {
  return (
    <Product.Navigator>
      <Product.Screen name="ProductList" component={ProductListScreen} />
      <Product.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Product.Navigator>
  );
}
