import { useState } from "react";
import { Text, TextInput, TouchableHighlight, View } from "react-native";
import { ShowData, shows_data } from "../../utils";
export default function MovieFinder() {
  const [textInput, setTextInput] = useState("");
  const [selectedList, setSelectedList] = useState<ShowData[]>([]);
  function handleTextInputChange(text: string) {
    if (text === "") return setSelectedList([]);
    const output = shows_data.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    setSelectedList(output);
  }
  return (
    <View
      style={{
        padding: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
        width: "100%",
      }}
    >
      <TextInput
        onTextInput={(e) => handleTextInputChange(e.nativeEvent.text)}
        placeholderTextColor={"white"}
        style={{ borderBottomColor: "white", fontSize: 16, color: "white" }}
        placeholder="Enter a Movie Name"
      ></TextInput>
      <View
        style={{
          width: "100%",
          padding: 10,
          marginVertical: 10,
          borderRadius: 10,
        }}
      >
        {selectedList.map((item, index) => (
          <TouchableHighlight key={index}>
            <View
              style={{
                padding: 10,
                marginVertical: 10,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <Text>{item.name}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
}
