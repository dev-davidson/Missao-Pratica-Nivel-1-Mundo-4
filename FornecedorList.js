import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FornecedorList = ({ fornecedores }) => {
  return (
    <View style={styles.container}>
      {fornecedores.map((fornecedor, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.text}>Nome: {fornecedor.nome}</Text>
          <Text style={styles.text}>Endereço: {fornecedor.endereco}</Text>
          <Text style={styles.text}>Contato: {fornecedor.contato}</Text>
          <Text style={styles.text}>Categoria: {fornecedor.categoria}</Text>
          {fornecedor.image && (
            <Image source={{ uri: fornecedor.image }} style={styles.image} />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default FornecedorList;
