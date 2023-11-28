import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import {
	COLOR_MODAL_TRANSPARENT_BG,
	COLOR_MAIN_BG,
	COLOR_MAIN_TEXT,
	COLOR_ERROR_BUTTON_BG,
} from "../../constants/colors";
import EditAnimalButton from "./EditAnimalButton";

const DeletionModal = ({ showDeleteModal, setShowDeleteModal, id }) => {
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={showDeleteModal}
			onRequestClose={() => setShowDeleteModal(false)}>
			<View style={styles.modalContainer}>
				<View style={styles.modalWrapper}>
					<Text style={{ fontSize: 20 }}>
						Are you sure, you want to delete animal with id: #{id}
					</Text>
					<View style={styles.buttonContainer}>
						<EditAnimalButton
							text={"Delete"}
							additionalStyles={{
								backgroundColor: COLOR_ERROR_BUTTON_BG,
							}}
							handlePress={() => console.log("deleted")}
						/>
						<EditAnimalButton
							text={"Don't delete"}
							handlePress={() => setShowDeleteModal(false)}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: "flex-end",
		alignContent: "center",
		alignItems: "center",
		backgroundColor: COLOR_MODAL_TRANSPARENT_BG,
		width: "100%",
	},
	modalWrapper: {
		backgroundColor: COLOR_MAIN_BG,
		color: COLOR_MAIN_TEXT,
		width: "100%",
		padding: 30,
		borderRadius: 16,
		borderColor: COLOR_ERROR_BUTTON_BG,
		borderWidth: 5,
	},
	buttonContainer: {
		justifyContent: "center",
		marginTop: 10,
		flexDirection: "row",
		gap: 10,
	},
});

export default DeletionModal;
