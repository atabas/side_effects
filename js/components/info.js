import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Info = () => (
  <Card>
    <CardHeader
      title="About This App"
    />
    <CardText>
      This app gets you the side effects/reactions of any medicine that you search for. 
      The reactions are sorted by number of times of occurence. 
      The medicinal data and reactions are based on comprehensive data from the OpenFDA API.
    </CardText>
  </Card>
);

export default Info;