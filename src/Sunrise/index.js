import dayjs from 'dayjs';

const display = (city, sunrise, sunset) => {
  const sunriseFormatted = dayjs(sunrise).format('H:mm');
  const sunsetFormatted = dayjs(sunset).format('H:mm');
  return `V <strong>${city}</strong> dnes vychází slunce v ${sunriseFormatted} a zapadá v ${sunsetFormatted}.`
}

export const Sunrise = (props) => {
  const div = document.createElement('div');
  div.innerHTML = `Čekám na odpověď serveru, kdy v ${props.city} vychází slunce…`

  fetch(`https://api.sunrise-sunset.org/json?lat=${props.lat}&lng=${props.lon}&formatted=0`)
    .then(resp => resp.json())
    .then(json => {
      div.innerHTML = display(props.city, json.results.sunrise, json.results.sunset);
    });

  return div;
}