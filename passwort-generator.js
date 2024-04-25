function generatePassword() {
    // Länge des Passworts
    var length = document.getElementById("length").value;
    // Alle Zeichen die im Passwort enthalten sein können
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&()_+'°<>|-.,;:";
    // Leerer String
    var password = "";
     // Schleife durchläuft die gewünschte Länge des Passworts
    for (var i = 0; i < length; i++) {
        // Zufälligen Index im Zeichensatz auswählen
        var randomIndex = Math.floor(Math.random()*charset.length);
        password += charset[randomIndex];
    }
    // Das generierte Passwort wird eingefügt
    document.getElementById("password").value = password;
}