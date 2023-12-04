import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import MainButton from "../MainComponents/MainButton";
import {
  COLOR_MAIN_BG,
  COLOR_MODAL_TRANSPARENT_BG,
  COLOR_PRIMARY,
  COLOR_SECONDARY_TEXT,
  COLOR_SKELETON_FIELD,
} from "../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
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
    let isSelected = selectedFilters.includes(filter);

    if (isSelected) {
      // If it's selected, remove it
      setSelectedFilters((prevSelected) =>
        prevSelected.filter((selectedFilter) => selectedFilter !== filter)
      );
    } else {
      // If it's not selected, add it
      setSelectedFilters((prevSelected) => [...prevSelected, filter]);
    }
    console.log(selectedFilters);
  };

  return (
    <View style={styles.con}>
      <View
        style={{
          padding: 10, // White padding
          width: "100%", // 100% width
        }}
      >
        <TextInput
          placeholder="Szukaj"
          style={{
            height: 45,
            margin: 10,
            padding: 5,
            width: "80%",
            marginLeft: "10%",
            textAlign: "center",
            borderRadius: 20,
            backgroundColor: "rgba(215,215,215,1)",
          }}
        />

        <ScrollView
          style={[styles.container]}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {filters.map((filter) => {
            return (
              <MainButton
                color="white"
                textColor="grey"
                onPress={() => handleFilterClick(filter)}
                text={filter}
                icon={<AntDesign name="plus" size={15} color={COLOR_PRIMARY} />}
                height={35}
                fontSize={14}
                width={"auto"}
                padding={8}
                paddingVertical={1}
                borderRadius={20}
                borderWidth={selectedFilters.includes(filter) ? 1 : 0}
                borderColor={
                  selectedFilters.includes(filter) ? COLOR_PRIMARY : 0
                }
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "rgba(245,245,245,0.9)",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    // height: 100,
  },
  filterButton: {
    marginRight: 1,
  },
  selectedFilter: {
    borderWidth: 2,
    borderColor: COLOR_PRIMARY, // Change the border color for the selected state
  },
});

export default Filters;
