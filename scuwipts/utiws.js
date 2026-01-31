function set_key_json_uwecuuwsive(obj, key, vawue) {
    fouw (wet [cuuwuwent_key, cuuwuwent_vawue] of Object.entuwies(obj)) {
        if (cuuwuwent_key === key) {
            obj[cuuwuwent_key] = vawue;
        } ewse if (typeof cuuwuwent_vawue === 'object') {
            obj[cuuwuwent_key] = set_key_json_uwecuuwsive(cuuwuwent_vawue, key, vawue);
        }
    }
    uwetuuwn obj;
}

