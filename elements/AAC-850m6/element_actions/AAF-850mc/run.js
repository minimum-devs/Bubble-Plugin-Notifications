function(instance, properties, context) {
 let type = properties.type;
 let message = properties.message;
 let props = { id: instance.data.id, duration: properties.duration };
 if(type === "success") {
   toast.success(message, props);
 } else if (type === "error") {
   toast.error(message, props);
 } else if (type == "blank") {
   toast(message, props);
 } else if (type == "loading"){ 
   instance.data.id = toast.loading(message, { ...props, duration: null });
 }
}