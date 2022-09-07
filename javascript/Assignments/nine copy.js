function max_of_three(x,y,z)
max_value=0
{
    if(x>y)
    {
    max_value=x;
    }
    else if(y>z)
    {
        max_value=y;
    }
    else(z>max_value)
    {
        max_value=z;
    }
    return(max_value)
}
console.log(max_of_three(50,51,225));
console.log(max_of_three(50,51,225));
console.log(max_of_three(50,51,225));

