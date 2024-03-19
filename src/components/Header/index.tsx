import { Text, View } from "react-native";
import { styles } from "../../styles/styles";

export default function Header() {
    return (
        <View style={styles.header}>
        <Text style={{color:"white", fontSize:32,textAlign:"center"}}>Magic Movie</Text>
        </View>
    );
}