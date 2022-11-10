import React, { useState } from "react";

function CreateArea(props) {
	const defaultNewNote = { title: "", content: "" };
	const [newNote, setNewNote] = useState(defaultNewNote);

	function updateNewNote(event) {
		const { name, value } = event.target;
		setNewNote((prevNewNote) => {
			return { ...prevNewNote, [name]: value };
		});
	}

	function submitNote(event) {
		props.addNote(newNote);
		setNewNote(defaultNewNote);
		event.preventDefault();
	}

	return (
		<div>
			<form className="create-note" onSubmit={submitNote}>
				<input
					name="title"
					placeholder="Title"
					value={newNote.title}
					onChange={updateNewNote}
				/>
				<textarea
					name="content"
					placeholder="Take a note..."
					rows="3"
					value={newNote.content}
					onChange={updateNewNote}
				/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
}

export default CreateArea;
