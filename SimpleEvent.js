class SimpleEvent {
    
    // constructor(name, start, end, summary){
        // this.name = name;
        // this.start = start;
        // this.end = end;
        // this.summary = summary;
    // }
    
    constructor(event) {
        this.name = ICAL.stringify.event.startDate;
        this.start = ICAL.stringify(event.startDate);
        this.end = ICAL.stringify(event.endDate);
        this.summary = ICAL.stringify(event.summary);
    }
    
    get getName() {
        return name;
    }
    get getStartTime() {
        return start;
    }
    get getEndTime() {
        return end;
    }
    get getSummary() {
        return summary;
    }
}
