# MVC template files

Start your MVC app here by copying this bolierplate code.


For the usage of cloudinary for uploading file to cloud, the codes of execution is below:
depending on what you need, the result will return the necessary information.

cloudinary.uploader.upload(request.file.path, function(result) {

<-------------all the necessary queries---------------------->

console.log(result)
})

the code below must be place in the routes:

app.get('/your route', upload.single('image_url'), your function);

the code below is to be place in form:

<!-- <form encType="multipart/form-data">
		<input type="file"/>
</form> --># findfood-mvc
