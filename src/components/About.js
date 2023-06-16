import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

export default function About() {
  return (
    <div className='container-about'>
        <div className='custom-div'>
      <Collapsible>
        <CollapsibleItem header="THE TEAM" icon={<i className="material-icons"></i>}>
          <p>Here you can see the player card, which consists of over 50 soccer football players from all over the world.</p>
        </CollapsibleItem>
        <CollapsibleItem header="Nations" icon={<i className="material-icons"></i>}>
          <p>Here you can see the player card, which consists of the nation of players from over the world.</p>
        </CollapsibleItem>
        <CollapsibleItem header="Daily news" icon={<i className="material-icons"></i>}>
          <p>Here you can see the Daily news</p>
        </CollapsibleItem>
      </Collapsible>
    </div>
    </div>
  );
};

