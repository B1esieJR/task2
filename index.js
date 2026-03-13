function calculateDistanceSimple(positionLat, positionLong, addressLat, addressLong) {
    // Упрощённая формула для небольших расстояний (когда координаты близки)
    const latDiff = addressLat - positionLat;
    const lonDiff = addressLong - positionLong;

    const kmPerDegree = 111;

    const distance = Math.sqrt(latDiff * latDiff + lonDiff * lonDiff) * kmPerDegree;

    return distance;
}

const distanceSimple = calculateDistanceSimple(positionLat, positionLong, addressLat, addressLong);
console.log(`Расстояние (упрощённо): ${distanceSimple.toFixed(2)} км`);