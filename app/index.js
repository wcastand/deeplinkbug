import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function () {
	const router = useRouter();

	return (
		<View>
			<Text>Index</Text>
			<Button title="press" onPress={() => router.push("sign")} />
		</View>
	);
}
