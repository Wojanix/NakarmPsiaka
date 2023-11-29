import React, { useState } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	Modal,
} from "react-native";
import Separator from "../Separator";
import {
	COLOR_ERROR_BUTTON_BG,
	COLOR_MAIN_BG,
	COLOR_MAIN_TEXT,
	COLOR_MODAL_TRANSPARENT_BG,
	COLOR_PRIMARY,
	COLOR_PRIMARY_BUTTON_TEXT,
	COLOR_SECONDARY_TEXT,
	COLOR_TERTIARY_TEXT,
} from "../../constants/colors";
import { MAX_BREED_LENGTH } from "../../constants/values";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // info button
import { MaterialIcons } from "@expo/vector-icons"; // edit button
import { FontAwesome } from "@expo/vector-icons"; // remove button
import DeletionModal from "./DeletionModal";

const Animal = ({
	id,
	name,
	type,
	breed,
	info,
	imgPath,
	setEditId, // id of animal to edit
	setShowEditComponent, // state for showing component in myAnimals screen, it will show edit instead of flat list (the mother component of this component)
}) => {
	const {
		image,
		nameStyle,
		idStyle,
		breedStyle,
		infoStyle,
		wrapper,
		firstWrapper,
		secondWrapper,
	} = styles;

	const [showEditModal, setShowEditModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	return (
		<View>
			<View style={wrapper}>
				<View style={firstWrapper}>
					<Image
						source={require("./../../../assets/dogImage.png")}
						style={image}
						alt={imgPath} // for tests
					/>
				</View>
				<View style={secondWrapper}>
					<Text style={nameStyle}>{name}</Text>
					<Text style={idStyle}>#id:{id}</Text>

					{breed.length <= MAX_BREED_LENGTH ? (
						<View>
							<Text style={breedStyle}>
								{type}, {breed}
							</Text>
						</View>
					) : (
						<View>
							<Text style={breedStyle}>{type},</Text>
							<Text style={breedStyle}>{breed}</Text>
						</View>
					)}

					<Text style={infoStyle}>{info}</Text>
				</View>
				<InfoButton
					showEditModal={showEditModal}
					setShowEditModal={setShowEditModal}
				/>
			</View>
			<Separator />
			<EditInfoModal
				showEditModal={showEditModal}
				setShowEditModal={setShowEditModal}
				// for editing the animal
				id={id}
				setEditId={setEditId}
				setShowEditComponent={setShowEditComponent}
				// for deletion modal
				setShowDeleteModal={setShowDeleteModal}
			/>
			<DeletionModal
				id={id}
				setShowDeleteModal={setShowDeleteModal}
				showDeleteModal={showDeleteModal}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	// for animal
	wrapper: {
		flexDirection: "row",
		margin: 10,
		justifyContent: "space-between",
		width: "100%",
	},
	firstWrapper: {
		width: "35%",
		aspectRatio: "1/1",
	},
	secondWrapper: {
		width: "45%",
	},
	thirdWrapper: {
		width: "1",
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 16,
	},
	nameStyle: {
		fontSize: 30,
		fontWeight: "300",
		color: COLOR_MAIN_TEXT,
	},
	idStyle: {
		color: COLOR_TERTIARY_TEXT,
		fontSize: 12,
		marginTop: -6,
	},
	breedStyle: {
		fontSize: 20,
		color: COLOR_SECONDARY_TEXT,
		fontWeight: "300",
		flexWrap: "wrap",
	},
	// for info button
	infoStyle: {
		fontSize: 14,
		color: COLOR_SECONDARY_TEXT,
		fontWeight: "300",
		width: 210,
	},
	// for modal
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
	},
	editIcons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		gap: 100,
	},
	cancelButton: {
		marginTop: 15,
		alignSelf: "center",
		backgroundColor: COLOR_PRIMARY,
		padding: 5,
		borderRadius: 10,
	},
});

const InfoButton = ({ showEditModal, setShowEditModal }) => {
	const { thirdWrapper } = styles;

	return (
		<View style={thirdWrapper}>
			<TouchableOpacity
				style={{
					marginTop: -10,
					marginRight: 20,
					padding: 15,
				}}
				onPress={() => setShowEditModal(!showEditModal)}>
				<MaterialCommunityIcons
					name="dots-vertical"
					size={24}
					color="black"
				/>
			</TouchableOpacity>
		</View>
	);
};

const EditInfoModal = ({
	showEditModal,
	setShowEditModal,
	id,
	setEditId,
	setShowEditComponent,
	setShowDeleteModal,
}) => {
	const { modalContainer, modalWrapper, editIcons, cancelButton } = styles;

	const handleEditButton = () => {
		setShowEditComponent(true);
		setEditId(id);
		setShowEditModal(false);
	};

	const handleRemoveButton = () => {
		setShowEditModal(false);
		setShowDeleteModal(true);
	};

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={showEditModal}
			onRequestClose={() => setShowEditModal(false)}>
			<View style={modalContainer}>
				<View style={modalWrapper}>
					<View style={editIcons}>
						<TouchableOpacity>
							<MaterialIcons
								name="mode-edit"
								size={40}
								color="black"
								onPress={() => handleEditButton()}
							/>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handleRemoveButton()}>
							<FontAwesome
								name="remove"
								size={40}
								color={COLOR_ERROR_BUTTON_BG}
							/>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						onPress={() => setShowEditModal(!showEditModal)}
						style={cancelButton}>
						<Text
							style={{
								color: COLOR_PRIMARY_BUTTON_TEXT,
								fontSize: 20,
								paddingHorizontal: 100,
							}}>
							Cancel
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

export default Animal;
