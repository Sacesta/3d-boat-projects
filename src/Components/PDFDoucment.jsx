import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    gap: 10,
  },
  section: {
    margin: 10,
    padding: 20,
    flexGrow: 1,
  },
});

const sideBySide = StyleSheet.create({
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-800.ttf",
      fontWeight: 800,
    },
  ],
});

const PDFDocument = ({ selectedOptions, colors, selectedImage, model }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginTop: 10,
          }}
        >
          {/* <Image
            src="/logo.png"
            style={{
              height: 40,
              width: 200,
              objectFit: "contain",
            }}
          /> */}
        </View>
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            padding: 10,
            gap: 10,
          }}
        >
          <View style={{ width: "30%" }}>
            <Image
              // src="/AL212_FP.png"
              src={`/${selectedImage}`}
              style={{
                height: 200,
                width: "100%",
                objectFit: "contain",
              }}
            />
          </View>
          <View
            style={{
              width: "70%",
              fontFamily: "Open Sans",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <View>
              <Text style={{ fontWeight: 800 }}>Model Varient:</Text>
              <Text>{model}</Text>
            </View>
            {/* <View>
              <Text style={{ fontWeight: 800 }}>Name:</Text>
              <Text>Demo Khan</Text>
            </View>
            <View>
              <Text style={{ fontWeight: 800 }}>Email:</Text>
              <Text>demo@gmail.com</Text>
            </View> */}

            <View
              style={{
                fontFamily: "Open Sans",
                display: "flex",
                gap: 5,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <View style={{ display: "flex" }}>
                <Text style={{ fontWeight: 800, fontSize: 20 }}>
                  Color Options
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  gap: 60,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: 800,
                      fontSize: 14,
                      alignSelf: "flex-start",
                    }}
                  >
                    Base Body:
                  </Text>
                  <Text style={{ fontSize: 12, width: "70%" }}>
                    {colors["Base Body"]}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: 800,
                      fontSize: 14,
                      alignSelf: "flex-start",
                    }}
                  >
                    Deck Strip:
                  </Text>
                  <Text style={{ fontSize: 12, width: "70%" }}>
                    {colors["Deck Strip"]}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  gap: 70,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: 800,
                      fontSize: 14,
                      alignSelf: "flex-start",
                    }}
                  >
                    Interior:
                  </Text>
                  <Text style={{ fontSize: 12, width: "70%" }}>
                    {colors["Interior"]}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: 800,
                      fontSize: 14,
                      alignSelf: "flex-start",
                    }}
                  >
                    Top Deck:
                  </Text>
                  <Text style={{ fontSize: 12, width: "70%" }}>
                    {colors["Top Deck"]}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            fontFamily: "Open Sans",
            display: "flex",
            gap: 5,
            padding: 10,
          }}
        >
          <View style={{ display: "flex" }}>
            <Text style={{ fontWeight: 800, fontSize: 20 }}>
              Features Options
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{ fontWeight: 800, fontSize: 14, alignSelf: "flex-start" }}
            >
              Engine Options:
            </Text>
            <Text style={{ fontSize: 12, width: "70%" }}>
              {selectedOptions["Select your Engine (multi-select)"]
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join("     ")}
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{ fontWeight: 800, fontSize: 14, alignSelf: "flex-start" }}
            >
              Construction Options:
            </Text>
            <Text style={{ fontSize: 12, width: "70%" }}>
              {selectedOptions["Construction options (multi-select)"]
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join("     ")}
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{ fontWeight: 800, fontSize: 14, alignSelf: "flex-start" }}
            >
              Electronic Options:
            </Text>
            <Text style={{ fontSize: 12, width: "70%" }}>
              {selectedOptions["Electronics / Lighting (multi-select)"]
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join("     ")}
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{ fontWeight: 800, fontSize: 14, alignSelf: "flex-start" }}
            >
              Appearance Options:
            </Text>
            <Text style={{ fontSize: 12, width: "70%" }}>
              {selectedOptions["Appearance Options (multi-select)"]
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join("     ")}
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{
                fontWeight: 800,
                fontSize: 14,
                alignSelf: "flex-start",
                alignSelf: "flex-start",
              }}
            >
              Misc. Options:
            </Text>
            <Text style={{ fontSize: 12, width: "80%" }}>
              {selectedOptions["Misc. Options (multi-select)"]
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join("     ")}
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{ fontWeight: 800, fontSize: 14, alignSelf: "flex-start" }}
            >
              Mooring Cover Options:
            </Text>
            <Text style={{ fontSize: 12, width: "70%" }}>
              {selectedOptions["Mooring Covers (multi-select)"]
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join("     ")}
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{ fontWeight: 800, fontSize: 14, alignSelf: "flex-start" }}
            >
              Trailer Options:
            </Text>
            <Text style={{ fontSize: 12, width: "70%" }}>
              {selectedOptions["Trailer options (multi-select)"]
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join("     ")}
            </Text>
          </View>
        </View>
        <View
          style={{
            fontFamily: "Open Sans",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 10,
              padding: 10,
              backgroundColor: "gray",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            blanditiis quam natus quo veniam quibusdam eaque laudantium vel
            voluptate voluptatem quia, doloremque reiciendis nemo beatae
            eligendi velit itaque, officia cupiditate?
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
