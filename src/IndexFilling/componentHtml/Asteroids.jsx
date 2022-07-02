import React from 'react';
import Vector1 from '../../imj/vector-1.svg';
import Vector0 from '../../imj/vector-0.svg';
import Vector2 from '../../imj/vector-2.svg';
import Vector3 from '../../imj/vector-3.svg';
import Vector5 from '../../imj/vector-5.svg';
import Vector9 from '../../imj/vector-9.svg';
import Vector10 from '../../imj/vector-10.svg';
import Vector13 from '../../imj/vector-13.svg';


const Asteroids = () => {
    return (
        <div className="app__desctiption__asteroids">
                            <div className="desctiption__asteroids">
                <img src={Vector9} className="aseroid-clock" alt="upss"  />
                            </div>
                            <div className="desctiption__asteroids">
                <img src={Vector2} className="aseroid-in-clock" alt="upss"  />
                            </div>
                            <div className="desctiption__asteroids">
                <img src={Vector1} className="aseroid-clock" alt="upss"  />
                            </div>
                            <div className="desctiption__asteroids">
                <img src={Vector0} className="aseroid-in-clock" alt="upss"  />
                            </div>
                            <div className="desctiption__asteroids">
                <img src={Vector2} className="aseroid-clock" alt="upss"  />
                            </div>
                            <div className="desctiption__asteroids">
                <img src={Vector5} className="aseroid-in-clock" alt="upss"  />
                            </div>
                            <div className="desctiption__asteroids">
                <img src={Vector0} className="aseroid-clock" alt="upss"  />
                            </div>
                            <div className="desctiption__asteroids">
                <img src={Vector10} className="aseroid-in-clock" alt="upss"  />
                            </div>
                            <div className="desctiption__asteroids">
                <img src={Vector13} className="aseroid-clock" alt="upss"  />
                            </div>
                            <div className="desctiption__asteroids">
                <img src={Vector3} className="aseroid-in-clock" alt="upss" />
                            </div>
                        </div>
    );
};

export default Asteroids;