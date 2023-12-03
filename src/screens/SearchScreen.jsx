import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, RadioButton } from "react-native-paper";

const SearchScreen = () => {
  const [species, setSpecies] = useState("");
  const [race, setRace] = useState("");
  const [age, setAge] = useState("");
  const [localization, setLocalization] = useState("");
  const [maxDistance, setMaxDistance] = useState("");
  const [gender, setGender] = useState("");

  const handleSave = () => {
    // Handle saving the input values
    // For example, you can send them to a server or store in local state
    console.log({
      species,
      race,
      age,
      localization,
      maxDistance,
      gender,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Animal Species"
        value={species}
        onChangeText={(text) => setSpecies(text)}
        style={styles.input}
      />

      <TextInput
        label="Race"
        value={race}
        onChangeText={(text) => setRace(text)}
        style={styles.input}
      />

      <TextInput
        label="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        label="Localization"
        value={localization}
        onChangeText={(text) => setLocalization(text)}
        style={styles.input}
      />

      <TextInput
        label="Max Distance (km)"
        value={maxDistance}
        onChangeText={(text) => setMaxDistance(text)}
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.genderContainer}>
        <RadioButton.Group
          onValueChange={(value) => setGender(value)}
          value={gender}
        >
          <View style={styles.radioButton}>
            <RadioButton.Item label="Male" value="male" />
          </View>
          <View style={styles.radioButton}>
            <RadioButton.Item label="Female" value="female" />
          </View>
        </RadioButton.Group>
      </View>

      <Button mode="contained" onPress={handleSave}>
        Search
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 12,
  },
  genderContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },
  radioButton: {
    marginRight: 16,
  },
});

export default SearchScreen;
