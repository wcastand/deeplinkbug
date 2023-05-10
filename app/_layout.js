import { Stack, usePathname, useSegments } from "expo-router";
import { useEffect } from "react";

export default function Root() {
	const segments = useSegments();
	const pathname = usePathname();
	useEffect(() => {
		console.log(pathname, segments);
	}, [pathname, segments]);
	return <Stack />;
}
