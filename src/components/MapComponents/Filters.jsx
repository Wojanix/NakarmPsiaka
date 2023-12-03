import React, { useState } from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import MainButton from "../MainComponents/MainButton";
// import { Button } from "react-native-paper";

const Filters = () => {
  const filters = [
    "Zwierzęta",
    "Schroniska",
    "Karmniki",
    "Niebezpieczne",
    "Gender",
  ];
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterClick = (filter) => {
    // Check if the filter is already in the selectedFilters array
    const isSelected = selectedFilters.includes(filter);

    if (isSelected) {
      // If it's selected, remove it
      setSelectedFilters((prevSelected) =>
        prevSelected.filter((selectedFilter) => selectedFilter !== filter)
      );
    } else {
      // If it's not selected, add it
      setSelectedFilters((prevSelected) => [...prevSelected, filter]);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {filters.map((filter) => {
        return (
          <MainButton
            styleArg={[
              styles.filterButton,
              selectedFilters.includes(filter) && styles.selectedFilter,
            ]}
            color="white"
            textColor="grey"
            borderWidth={0.3}
            borderColor="grey"
            onPress={() => handleFilterClick(filter)}
            text={"+ " + filter}
            height={39}
            fontSize={14}
            width={"auto"}
            padding={9}
            borderRadius={20}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    left: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.9)",
    // justifyContent: "space-between",
    height: 40,
    // padding: 8,
  },
  filterButton: {
    marginRight: 1,
  },
  selectedFilter: {
    backgroundColor: "#3498db", // Change the background color for the selected state
    borderWidth: 2,
    borderColor: "#2980b9", // Change the border color for the selected state
  },
});

export default Filters;
