import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FornecedorForm from './FornecedorForm';
import FornecedorList from './FornecedorList';

const App = () => {
  const [fornecedores, setFornecedores] = useState([]);

  const handleAddFornecedor = (fornecedor) => {
    setFornecedores([...fornecedores, fornecedor]);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <FornecedorForm onAddFornecedor={handleAddFornecedor} />
        <FornecedorList fornecedores={fornecedores} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;
