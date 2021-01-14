const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const temp_values = document.getElementById("temp_values");
const temp_status = document.getElementById("temp_status");
const day = document.getElementById("day");
const today_data = document.getElementById("today_data");

const getInfo = async (eve) => {
  //doesnot Refresh or reload  the page
  let cityVal = cityName.value;
  if (cityVal === "") {

    alert("Please write the name of the city before you search!");

  } else {
    try {
      eve.preventDefault();
      const getCurrentdata = () => {
        var weekday = new Array(7);

        weekday[0] = "SUNDAY";

        weekday[1] = "MONDAY";

        weekday[2] = "TUESDAY";

        weekday[3] = "WEDNESDAY";

        weekday[4] = "THURSDAY";

        weekday[5] = "FRIDAY";

        weekday[6] = "SATURDAY";
        let currentTime = new Date();
        days = weekday[currentTime.getDay()];
        return `Day : ${days}`;
      };
      const getCurrentTime = () => {
        var months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ];
        var now = new Date();
        var month = months[now.getMonth()];
        var date = now.getDate();
        let hours = now.getHours();
        let mins = now.getMinutes();
        let year = now.getFullYear();

        let period = "AM";
        if (hours >= 12) {
          period = "PM";
        }
        if (hours > 12) {
          hours = hours - 12;
        }
        if (mins < 10) {
          mins = "0" + mins;
        }
        if (hours < 10) {
          hours = "0" + hours;
        }
        return `IST : ${date}/ ${month}/ ${year} |    ${hours}:${mins} ${period}`;
      };

      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ae1442a2d74584b70d03d6c716cf42cb`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data]; //array of an object
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      temp_values.innerText = arrData[0].main.temp ;
      temp_status.innerText = arrData[0].weather[0].main;
      day.innerText = getCurrentdata();
      today_data.innerText = getCurrentTime();
    } catch {
      city_name.innerText = "City,Country";
      temp_values.innerText = "_" ;
      temp_status.innerText = "Status"
      day.innerText ="Day"
      today_data.innerText = "Date & Time";
  
  
      alert("Please write the correct name of the city!");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
