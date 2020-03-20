class Registro {
    constructor(id,lat,long) {
        this.id = id;
        this.lat = lat;
        this.long = long;
    }

    agregar(){
        db.collection('ubicacion').add({
            lat : this.lat,
            long: this.long
        });
    };


    
    borrar(id){
        db.collection('ubicacion').doc(id).delete();

    };


    


    


};