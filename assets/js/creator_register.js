$(window).on("load", function () {
  let fd = new FormData();

  let fileArr = [];

  const CreatorData = {};

  // add data while typing
  // $(".creator-input").on("input", function () {
  //     CreatorData[$(this).attr("data-input")] = $(this).val();
  // });

  // document uploads functionality
  const allowedFileTypes = ["png", "jpg", "jpeg", "JPG", "JPEG", "PNG"];

  const generateUID = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);
    const finalUID = head + tail;
    return finalUID;
  };

  const imageCard = (data, index) => {
    return `<div class="img-box">
          <img src=${data} alt="document" class="preview-img" id=${generateUID()} />
          <div class="icon-box flex-css" data-index=${index}>
            <img src="./assets/images/close.png" alt="close" />
          </div>
        </div>`;
  };

  const triggerImageRemove = () => {
    $(".icon-box").on("click", function () {
      const imgBox = $(this).parent(".img-box");
      const imageIndex = $(this).attr("data-index");
      fileArr = fileArr.filter((obj) => obj.index != imageIndex);
      console.log(fileArr);
      imgBox.fadeOut(500, function () {
        $(this).remove();
      });
    });
  };

  let counter = -1;
  function uploadFiles(e) {
    e.preventDefault();
    const files = $(this)[0].files;
    console.log(files);
    if (files.length > 0) {
      $.each(files, function (index, file) {
        if (allowedFileTypes.indexOf(file.type.replace("image/", "")) >= 0) {
          var reader = new FileReader();
          reader.onload = function (e) {
            counter = counter + 1;
            const imgData = e.target.result;
            $("#previewBox").append(imageCard(imgData, counter));
            triggerImageRemove();
            fileArr.push({ index: counter, file });
          };

          reader.onerror = function (e) {
            alert("ERROR: " + e.target.error.code);
          };
          reader.readAsDataURL(file);
        } else {
          alert("Invalid file type !!");
        }
      });
    }
  }

  $("#documentUpload").on("change", uploadFiles);

  // register creator api call
  const URL = "";

  $("#registerCreatorBtn").on("click", function (e) {
    e.preventDefault();

    // $.each(CreatorData, function (key, value) {
    //     fd.append(key, value);
    // });

    // $.each(fileArr, function (index, value) {
    //     fd.append("file" + [value.index], value.file);
    // });

    // postFormData(URL, fd, function (data) {
    //     if (data) {
    //     } else {
    //         alert("Something went wrong !!");
    //     }
    // });
  });
});
