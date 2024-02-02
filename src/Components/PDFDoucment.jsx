import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';
import { colorOptions as alureColorOptions } from '../Constants/alure.js';
import { colorOptions as islandColorOptions } from '../Constants/island.js';
import { colorOptions as atlantisColorOptions } from '../Constants/atlantis.js';
import { colorOptions as signatureColorOptions } from '../Constants/signature.js';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
});

Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-800.ttf',
      fontWeight: 800,
    },
  ],
});

const getColorName = (path, colors) => {
  let selectedColors = {};
  if (path.includes('Alure')) {
    selectedColors = alureColorOptions;
  } else if (path.includes('Island')) {
    selectedColors = islandColorOptions;
  } else if (path.includes('Atlantis')) {
    selectedColors = atlantisColorOptions;
  } else if (path.includes('Signature')) {
    selectedColors = signatureColorOptions;
  }
  const mappedColors = {};
  for (const key in colors) {
    if (selectedColors[key]) {
      const colorName = selectedColors[key]
        .filter((col) => col.hex === colors[key])
        .map((color) => color.name);
      mappedColors[key] = colorName[0];
    }
  }

  console.log('mappedColors ',mappedColors);
  return mappedColors;
};
const PDFDocument = ({
  selectedOptions,
  colors,
  selectedImage,
  model,
  path,
}) => {
  const mappedColors = getColorName('/Alure', colors);
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            marginTop: 10,
          }}>
          <Image
            src='/logo.png'
            style={{
              height: 40,
              width: 200,
              objectFit: 'contain',
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            padding: 10,
            gap: 10,
          }}>
          <View style={{ width: '50%' }}>
            <Image
              // src="/AL212_FP.png"
              src={`/${selectedImage}`}
              style={{
                height: 200,
                width: '100%',
                objectFit: 'contain',
              }}
            />
          </View>
          <View
            style={{
              width: '50%',
              fontFamily: 'Open Sans',
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}>
            <View>
              <Text style={{ fontWeight: 800 }}>Model Variant:</Text>
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
                fontFamily: 'Open Sans',
                display: 'flex',
                gap: 5,
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <View style={{ display: 'flex' }}>
                <Text style={{ fontWeight: 800, fontSize: 20 }}>
                  Color Options
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  gap: 60,
                }}>
                <View>
                  <Text
                    style={{
                      fontWeight: 800,
                      fontSize: 10,
                      alignSelf: 'flex-start',
                    }}>
                    Primary Color:
                  </Text>
                  <Text style={{ fontSize: 12, width: '70%' }}>
                    {mappedColors['Primary Fence']}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: 800,
                      fontSize: 10,
                      alignSelf: 'flex-start',
                    }}>
                    Secondary Color:
                  </Text>
                  <Text style={{ fontSize: 12, width: '70%' }}>
                    {mappedColors['Secondary Fence']}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  gap: 70,
                }}>
                <View>
                  <Text
                    style={{
                      fontWeight: 800,
                      fontSize: 10,
                      alignSelf: 'flex-start',
                    }}>
                    Exterior Rail:
                  </Text>
                  <Text style={{ fontSize: 12, width: '70%' }}>
                    {mappedColors['Exterior Rail']}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: 800,
                      fontSize: 10,
                      alignSelf: 'flex-start',
                    }}>
                    Interior Option:
                  </Text>
                  <Text style={{ fontSize: 12, width: '70%' }}>
                    {mappedColors['Interior Options']}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            fontFamily: 'Open Sans',
            display: 'flex',
            gap: 5,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          <View style={{ display: 'flex' }}>
            <Text style={{ fontWeight: 800, fontSize: 16 }}>
              Features Options
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{
                fontWeight: 800,
                fontSize: 12,
                alignSelf: 'flex-start',
              }}>
              Engine Options:
            </Text>
            <Text style={{ fontSize: 10, width: '70%' }}>
              {selectedOptions['Select your Engine (multi-select)']
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join('     ')}
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{
                fontWeight: 800,
                fontSize: 12,
                alignSelf: 'flex-start',
              }}>
              Construction Options:
            </Text>
            <Text style={{ fontSize: 10, width: '70%' }}>
              {selectedOptions['Construction options (multi-select)']
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join('     ')}
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{
                fontWeight: 800,
                fontSize: 12,
                alignSelf: 'flex-start',
              }}>
              Electronic Options:
            </Text>
            <Text style={{ fontSize: 10, width: '70%' }}>
              {selectedOptions['Electronics / Lighting (multi-select)']
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join('     ')}
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{
                fontWeight: 800,
                fontSize: 12,
                alignSelf: 'flex-start',
              }}>
              Appearance Options:
            </Text>
            <Text style={{ fontSize: 10, width: '70%' }}>
              {selectedOptions['Appearance Options (multi-select)']
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join('     ')}
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{
                fontWeight: 800,
                fontSize: 12,
                alignSelf: 'flex-start',
              }}>
              Misc. Options:
            </Text>
            <Text style={{ fontSize: 10, width: '80%' }}>
              {selectedOptions['Misc. Options (multi-select)']
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join('     ')}
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{
                fontWeight: 800,
                fontSize: 12,
                alignSelf: 'flex-start',
              }}>
              Mooring Cover Options:
            </Text>
            <Text style={{ fontSize: 10, width: '70%' }}>
              {selectedOptions['Mooring Covers (multi-select)']
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join('     ')}
            </Text>
          </View>
          <View style={sideBySide.flexRow}>
            <Text
              style={{
                fontWeight: 800,
                fontSize: 12,
                alignSelf: 'flex-start',
              }}>
              Trailer Options:
            </Text>
            <Text style={{ fontSize: 10, width: '70%' }}>
              {selectedOptions['Trailer options (multi-select)']
                ?.map((item, index) => `(${index + 1}) ${item}`)
                .join('     ')}
            </Text>
          </View>
        </View>
        <View
          style={{
            fontFamily: 'Open Sans',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            bottom: 10,
            width: '100%',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 8,
              padding: 10,
              backgroundColor: 'gray',
            }}>
            All prices found on this boat builder and website are based on
            standard MSRP in US Dollars. Prices DO NOT include destination fees,
            prep, registration fees, taxes, trailer, dealer installed options,
            or any other applicable discounts or charges. Prices, materials,
            standard equipment and options are subject to change without notice.
            Please contact your nearest dealer to determine exact pricing at
            time of purchase.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
