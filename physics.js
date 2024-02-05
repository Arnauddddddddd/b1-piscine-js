function getAcceleration(object) {
    if (object.f && object.m) {
        return object.f / object.m;
    } else if (object.Δv && object.Δt) {
        return object.Δv / object.Δt;
    } else if (object.d && object.t) {
        return (object.d * 2) / (object.t * object.t);}
    return "impossible";
    
}