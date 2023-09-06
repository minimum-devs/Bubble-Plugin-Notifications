function(instance, properties, context) {
  let font = properties.bubble.font_face();
  let element = React.createElement(Toaster, {
    position: properties.position,
    toastOptions: {
      blank: {
        ...(properties.blank_icon && { icon: properties.blank_icon }),
        iconTheme: {
          primary: properties.blank_primary_icon_theme,
          secondary: properties.blank_secondary_icon_theme,
        },
        style: {
          fontFamily: font.split(":::")[0],
          border: `${properties.border_size}px solid ${properties.border_blank}`,
          background: properties.blank_bg,
          color: properties.blank_txt,
        },
      },

      success: {
        ...(properties.success_icon && { icon: properties.success_icon }),
        iconTheme: {
          primary: properties.success_primary_icon_theme,
          secondary: properties.success_secondary_icon_theme,
        },
        style: {
          fontFamily: font.split(":::")[0],
          border: `${properties.border_size}px solid ${properties.border_succes}`,
          background: properties.succes_bg,
          color: properties.succes_txt,
        },
      },
      error: {
        ...(properties.error_icon && { icon: properties.error_icon }),
        iconTheme: {
          primary: properties.error_primary_icon_theme,
          secondary: properties.error_secondary_icon_theme,
        },
        style: {
          fontFamily: font.split(":::")[0],
          border: `${properties.border_size}px solid ${properties.border_error}`,
          background: properties.error_bg,
          color: properties.error_txt,
        },
      },
    },
  });

  let target = document.querySelector('[data-toaster="1"]');

  if (!target) {
    let div = document.createElement("div");
    div.setAttribute("data-toaster", "1");
    let firstChild = document.body.firstChild;

    target = document.body.insertBefore(div, firstChild);
  }

  ReactDOM.render(element, target);
}