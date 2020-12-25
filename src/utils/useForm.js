import { useState } from 'react';

export default function useForm(defaults) {
	const [values, setValues] = useState(defaults);

	function updateValue(e) {
		// check if its a number and convert
		console.log(e);
		let { value } = e.target;

		setValues({
			// copy the existing values into it
			...values,
			// update the new value that changed
			[e.target.name]: value,
		});
	}
	console.log(values);
	return { values, updateValue };
}
