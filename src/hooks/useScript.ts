import { useEffect } from 'react';

const useScript = (url: string, async: boolean = true, defer: boolean = true) => {
	useEffect(() => {
		// create script
		const script = document.createElement('script');
		script.src = url;
		script.async = async;
		script.defer = defer;

		//append script to document
		document.body.appendChild(script);
		
		return () => {
			// remove the script to avoid multiple loading on document
			document.body.removeChild(script);
		}
	}, [url, async, defer]);
};

export default useScript;