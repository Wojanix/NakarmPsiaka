import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
// import { Button } from "react-native-paper";

const Filters = () => {
  const filters = ["Species", "Race", "Age", "Localization", "Gender"];
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
    <View style={styles.container}>
      {filters.map((filter) => {
        // <Button
        //   key={filter}
        //   style={[
        //     styles.filterButton,
        //     // selectedFilters.includes(filter) && styles.selectedFilter,
        //   ]}
        //   onPress={() => handleFilterClick(filter)}
        //   title={filter}
        // />;
        <Text>{filter}</Text>;
      })}
    </View>
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
    justifyContent: "space-between",
    height: 60,
    padding: 8,
  },
  filterButton: {
    width: 20,
    height: 20,
    marginRight: 8,
    backgroundColor: "red",
  },
  selectedFilter: {
    backgroundColor: "#3498db", // Change the background color for the selected state
    borderWidth: 2,
    borderColor: "#2980b9", // Change the border color for the selected state
  },
});

export default Filters;
