import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import {ProfileWithIntegrations} from '@/types'
interface ExistIntegrationProps {
    data: {}
}



const ExistIntegrationItem = ({data}:ExistIntegrationProps) => {
    return ( 
        <div>
            {/* <Card className="mb-5 bg-slate-700/50 ">
            <CardHeader>
                <CardTitle className="bg-neuital-700">{data.title}</CardTitle>
                <CardDescription> {props.description} 
                {props.description_link? 
                (<a href={props.description_link} className="hover:text-green-700 underline"> {props.description_link_title} </a>)
                : <></> }
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p> 
                {props.content_link?
                <a href={props.content_link} className="hover:text-green-700 underline">{props.content_link_title}</a>        
                : <></>
                    }
                </p>
            </CardContent>
            <CardFooter className="align-item-rigth">
                {props.button?
                <Button onClick={() => onOpen(props.modal, {token})}
                variant='primary'>{props.button}</Button>
                : <></>}
            </CardFooter>
        </Card> */}
        </div>
     );
}
 
export default ExistIntegrationItem;