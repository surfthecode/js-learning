// const url = "https://worldtimeapi.org/api/timezone/Europe/Bucharest";

// async function getData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

// getData();

const url2 = "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9";

const request = new Request(url2, {
  headers: {
    Authorization: "Bearer xyz-test",
  },
});

async function getData2() {
  try {
    const response = await fetch(request);
    const data = await response.json();
    if (data.ok) {
      console.log("Success:", data);
    } else {
      console.log("Server error:", data.error.message);
    }
  } catch (error) {
    console.log(`Fetch error: ${error}`);
  }
}

getData2();
