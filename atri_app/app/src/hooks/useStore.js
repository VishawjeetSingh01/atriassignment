import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Div1": {
      "callbacks": {}
    },
    "Div3": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Flex32": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Flex4": {
      "callbacks": {}
    },
    "Div5": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Div6": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex17": {
      "callbacks": {}
    },
    "Flex22": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Flex27": {
      "callbacks": {}
    },
    "Flex20": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Flex28": {
      "callbacks": {}
    },
    "Flex29": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "Flex33": {
      "callbacks": {}
    },
    "Breadcrumb1": {
      "custom": {
        "divider": "",
        "items": [
          {
            "name": "Home",
            "link": ""
          },
          {
            "name": "About ",
            "link": ""
          },
          {
            "name": "Menu ",
            "link": ""
          },
          {
            "name": "Contact  us",
            "link": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/_Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Overlay2": {
      "custom": {
        "open": true
      },
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Div4": {
      "callbacks": {}
    },
    "TextBox4": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about%201.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "Dedicated To Delight You"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "custom": {
        "text": "Aenean tellus uAenean tellus urna, vehicula quis quam vel, finibus sollicitudin quam maecenas mollis risus eu purus faibus efficitur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean tellus urna, vehicula quis quam vel, finibus sollicitudin quam maecenas mollis risus eu purus faibus efficitur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdibequis quam vel, finibus sollicitudin quam maecenas mollis risus eu purus faibus efficitur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam li"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Overlay1": {
      "custom": {
        "open": true,
        "closeOverlayAfter": ""
      },
      "callbacks": {}
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/home.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1": {
      "custom": {
        "text": "Welcome ,"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "CUISINE - RESTAURANT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Cuisine Cms Template is an Elegant yet very Powerful CMS Template. Made up of several useful sections that you can edit or remove.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "custom": {
        "text": "Order Now"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div2": {
      "callbacks": {}
    },
    "TextBox13": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "Our Location,"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "custom": {
        "text": "Close To Downtown"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "custom": {
        "text": "Etiam tristiquEtiam tristique, metus pretium rutrum elementum, risus tortor euismod urna, ac porta felis felis vel dui in bibendum justo vel pellentesEtiam tristique, metus pretium rutrum elementum, risus tortor euismod urna, ac porta felis felis vel dui in bibendum justo vel pellentesque accumsan. Etiam tristique, metus pretium rutrum elementum, risus tortor euismod urna, ac porta felis felis vel dui in bibendum justo vel pellentesque accumsan. Etiam tristique, metus pretium rutrum elementum, risus tortor euismod urna, ac porta felis felis vel dui in bibendum justo vel pellentesque accumsan. Etiam tristique, metus pretium rutrum elementum, risus tortor euismod urna, ac porta felis felis vel dui in bibendum justo vel pellentesque accumsan. Etiam tristique, metus pretium rutrum elementum, risus tortor euismod urna, ac porta felis felis vel dui in bibendum justo vel pellentesque accumsan. accumsan. e, metus pretium rutrum elementum, risus tortor euismod urna, ac porta felis felis vel dui in bibendum justo vel pellentesque accumsan. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "LUNCH MENU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lunnch.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": "DINNER MENU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/dinner.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "DESSERT MENU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/desert.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "custom": {
        "text": "BREAKFAST MENU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/bek3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex15": {
      "callbacks": {}
    },
    "TextBox18": {
      "custom": {
        "text": "Contact Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "custom": {
        "text": "Email Us :  cuisine_restaurant @gmail.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "Call Us :     +917389964893"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
