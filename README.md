# Weather-App

# Setup

```bash
$ git clone https://github.com/Cristian221995/Weather-App.git
$ cd Weather-App
$ npm install
$ npm start
```

# Comments

Durante el desarrollo de este challenge, me encontre con un "inconveniente", al parecer la api openWeather fue actualizada y para buscar el clima a x dias, era necesario usar otro endpoint al cual tenes que pasarle las coordenadas de la ciudad, y el mismo no te devolvia el nombre de dicha ciudad, por lo tanto decidi hacer 2 llamadas, una que me da el clima de la ciudad con su respectivo nombre y las coordenadas, al tener esa informacion, la uso para consumir el endpoint que me da el clima a x dias.
