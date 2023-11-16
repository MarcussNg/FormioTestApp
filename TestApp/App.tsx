/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {WebView} from 'react-native-webview';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const customHTML = `
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css">
      <script src="https://cdn.form.io/js/formio.embed.js"></script>
    </head>
    <body>
      <div id="formio"></div>
      <script>
        Formio.createForm(document.getElementById('formio'), {
          components: [
            {
              type: 'textfield',
              key: 'firstName',
              label: 'First Name',
              placeholder: 'Enter your first name.',
              input: true,
              tooltip: 'Enter your <strong>First Name</strong>',
              description: 'Enter your <strong>First Name</strong>'
            },
            {
              type: 'textfield',
              key: 'lastName',
              label: 'Last Name',
              placeholder: 'Enter your last name',
              input: true,
              tooltip: 'Enter your <strong>Last Name</strong>',
              description: 'Enter your <strong>Last Name</strong>'
            },
            {
              type: "select",
              label: "Favorite Things",
              key: "favoriteThings",
              placeholder: "These are a few of your favorite things...",
              data: {
                values: [
                  {
                    value: "raindropsOnRoses",
                    label: "Raindrops on roses"
                  },
                  {
                    value: "whiskersOnKittens",
                    label: "Whiskers on Kittens"
                  },
                  {
                    value: "brightCopperKettles",
                    label: "Bright Copper Kettles"
                  },
                  {
                    value: "warmWoolenMittens",
                    label: "Warm Woolen Mittens"
                  }
                ]
              },
              dataSrc: "values",
              template: "<span>{{ item.label }}</span>",
              multiple: true,
              input: true
            },
            {
              type: 'button',
              action: 'submit',
              label: 'Submit',
              theme: 'primary'
            }
          ]
        }).then(function(form) {
          form.on('submit', function(submission) {
            console.log(submission);
          });
        });
      </script>
    </body>
  </html>
  `;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 2}}>
        <WebView
          source={{
            html: customHTML,
          }}
          style={{
            marginTop: 20,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
