import { createStyle } from "@gluestack-style/react";

export const Button = createStyle({
  backgroundColor: "$primary500",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  borderWidth: 1,
  height: "$14",
  width: "$full",
  borderRadius: "$md",

  _text: {
    color: "$white",
    fontFamily: "$heading",
  },

  _icon: {
    color: "$white",
  },

  _spinner: {
    props: {
      color: "$white",
    },
  },

  variants: {
    action: {
      primary: {
        bg: "$green700",
        borderColor: "$green700",

        ":hover": {
          bg: "$green500",
          borderColor: "$green500",
        },

        ":active": {
          bg: "$green500",
          borderColor: "$green500",
        },

        _text: {
          color: "$white",
          ":hover": {
            color: "$white",
          },
          ":active": {
            color: "$white",
          },
        },

        _icon: {
          color: "$white",
          ":hover": {
            color: "$white",
          },
          ":active": {
            color: "$white",
          },
        },

        _spinner: {
          props: {
            color: "$white",
          },
          ":hover": {
            props: {
              color: "$white",
            },
          },
          ":active": {
            props: {
              color: "$white",
            },
          },
        },
      },
    },

    variant: {
      outline: {
        backgroundColor: "$transparent",
        borderColor: "$green500",

        ":hover": {
          backgroundColor: "$green700",
          borderColor: "$green700",
        },
        ":active": {
          backgroundColor: "$green700",
          borderColor: "$green700",
        },

        _text: {
          color: "$green500",
          ":hover": {
            color: "$white",
          },
          ":active": {
            color: "$white",
          },
        },

        _icon: {
          color: "$green500",
          ":hover": {
            color: "$white",
          },
          ":active": {
            color: "$white",
          },
        },

        _spinner: {
          props: {
            color: "$green500",
          },
          ":hover": {
            props: {
              color: "$white",
            },
          },
          ":active": {
            props: {
              color: "$white",
            },
          },
        },
      },
      solid: {},
    },

    size: {
      xs: {
        px: "$3.5",
        h: "$8",
        _icon: {
          props: {
            size: "2xs",
          },
        },
        _text: {
          props: {
            size: "xs",
          },
        },
      },
      sm: {
        px: "$4",
        h: "$9",
        _icon: {
          props: {
            size: "sm",
          },
        },
        _text: {
          props: {
            size: "sm",
          },
        },
      },
      md: {
        px: "$5",
        h: "$10",
        _icon: {
          props: {
            size: "md",
          },
        },
        _text: {
          props: {
            size: "md",
          },
        },
      },
      lg: {
        px: "$6",
        h: "$11",
        _icon: {
          props: {
            size: "md",
          },
        },
        _text: {
          props: {
            size: "lg",
          },
        },
      },
      xl: {
        px: "$7",
        h: "$12",
        _icon: {
          props: {
            size: "lg",
          },
        },
        _text: {
          props: {
            size: "xl",
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      action: "primary",
      variant: "link",
      value: {
        px: "$0",
        bg: "$transparent",
        ":hover": {
          bg: "$transparent",
        },
        ":active": {
          bg: "$transparent",
        },
      },
    },
    {
      action: "secondary",
      variant: "link",
      value: {
        px: "$0",
        bg: "$transparent",
        ":hover": {
          bg: "$transparent",
        },
        ":active": {
          bg: "$transparent",
        },
      },
    },
    {
      action: "positive",
      variant: "link",
      value: {
        px: "$0",
        bg: "$transparent",
        ":hover": {
          bg: "$transparent",
        },
        ":active": {
          bg: "$transparent",
        },
      },
    },
    {
      action: "negative",
      variant: "link",
      value: {
        px: "$0",
        bg: "$transparent",
        ":hover": {
          bg: "$transparent",
        },
        ":active": {
          bg: "$transparent",
        },
      },
    },
    {
      action: "primary",
      variant: "outline",
      value: {},
    },
    {
      action: "secondary",
      variant: "outline",
      value: {},
    },
    {
      action: "positive",
      variant: "outline",
      value: {},
    },
    {
      action: "negative",
      variant: "outline",
      value: {},
    },
    {
      action: "primary",
      variant: "solid",
      value: {
        _text: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _icon: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _spinner: {
          props: { color: "$textLight0" },
          ":hover": {
            props: { color: "$textLight0" },
          },
          ":active": {
            props: { color: "$textLight0" },
          },
        },
      },
    },
    {
      action: "secondary",
      variant: "solid",
      value: {
        _text: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _icon: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _spinner: {
          props: { color: "$textLight0" },
          ":hover": {
            props: { color: "$textLight0" },
          },
          ":active": {
            props: { color: "$textLight0" },
          },
        },
      },
    },
    {
      action: "positive",
      variant: "solid",
      value: {
        _text: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _icon: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
          props: { color: "$textLight0" },
        },
        _spinner: {
          props: { color: "$textLight0" },
          ":hover": {
            props: { color: "$textLight0" },
          },
          ":active": {
            props: { color: "$textLight0" },
          },
        },
      },
    },
    {
      action: "negative",
      variant: "solid",
      value: {
        _text: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _icon: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _spinner: {
          props: { color: "$textLight0" },
          ":hover": {
            props: { color: "$textLight0" },
          },
          ":active": {
            props: { color: "$textLight0" },
          },
        },
      },
    },
  ],

  props: {
    size: "md",
    variant: "solid",
    action: "primary",
  },

  _web: {
    ":focusVisible": {
      outlineWidth: "$0.5",
      outlineColor: "$primary700",
      outlineStyle: "solid",
    },
  },

  ":disabled": {
    opacity: 0.4,
  },
});
