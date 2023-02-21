function(instance, properties, context) {
 let type = properties.type;
 if(type === "success") {
   toast.success(properties.message);
 } else if (type === "error") {
   toast.error(properties.message);
 } else if (type == "blank"){
   toast(properties.message);
 }  
}