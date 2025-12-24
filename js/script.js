// Parent object
function Event(name, date) {
    this.name = name;
    this.date = date;
}

Event.prototype.getDetails = function () {
    return this.name + " scheduled on " + this.date;
};

// Child object
function CampusEvent(name, date, venue) {
    Event.call(this, name, date);
    this.venue = venue;
}

// Prototypal inheritance
CampusEvent.prototype = Object.create(Event.prototype);
CampusEvent.prototype.constructor = CampusEvent;

CampusEvent.prototype.getVenue = function () {
    return "Venue: " + this.venue;
};

// Button interaction
function showEvent() {
    let event = new CampusEvent("Tech Fest", "25 Sept 2025", "Main Auditorium");
    document.getElementById("output").innerText =
        event.getDetails() + " | " + event.getVenue();
}
