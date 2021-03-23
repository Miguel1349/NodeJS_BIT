const rp = require('./ReadPartners.js');
const geolib = require('geolib');

const calcularDistancia = () => {
    const partners = rp.readFile();
    const origin = {
        latitude: 51.515419,
        longitude: -0.141099
    }
    let nearPartners = partners.filter(partner => {
        let near = false;
        partner.offices.forEach(office => {
            const to = {
                latitude: office.coordinates.split(",")[0],
                longitude: office.coordinates.split(",")[1]
            }
            if ((geolib.getDistance(origin, to) / 1000) < 100) {
                near = true;
            }
        });
        if (near) {
            return partner;
        }
    });
    console.log(nearPartners.sort(near));
}


calcularDistancia();
