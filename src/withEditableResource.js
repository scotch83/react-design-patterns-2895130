import { json } from 'body-parser';
import React, { useState, useEffect } from 'react';
const capitalize = (s) => s[0].toUpperCase() + s.slice(1);
export const withEditableResource = (Component, url, resourceName) => {
	return props => {
		const [originalResource, setOriginalResource] = useState(null);
		const [resource, setResource] = useState(null);

		useEffect(() => {
			(async () => {
				const res = await fetch(url);
				const response = await res.json()
				setOriginalResource(response);
				setResource(response);
			})();
		}, []);

		const onChange = changes => {
			setResource({ ...resource, ...changes });
		}

		const onSave = async () => {
			const res = await fetch(url, { method: 'POST', body: { [resourceName]: resource } });
			const response = await res.json()
			setOriginalResource(response);
			setResource(response);
		}

		const onReset = () => {
			setResource(originalResource);
		}

		const resourceProps = {
			[resourceName]: resource,
			[`onChange${capitalize(resourceName)}`]: onChange,
			[`onSave${capitalize(resourceName)}`]: onSave,
			[`onReset${capitalize(resourceName)}`]: onReset
		}
		return <Component {...props} {...resourceProps} />
	}
}
