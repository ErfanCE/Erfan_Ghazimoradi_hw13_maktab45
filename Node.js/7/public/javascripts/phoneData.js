var phonesData;

$.ajax({
    type: "get",
    url: "http://localhost:8000/getPhones",
    async :false,
    success: function (response) {
        phonesData = response;
    },
    error: function (err) {
        console.log(err);
    }
});

console.log(phonesData);