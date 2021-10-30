const mycollapse = document.querySelectorAll('.appointment #othercharge');
const appointment = document.querySelector('.appointment');
const form_section = document.querySelector('section.sell_mobile');
const fa_together = document.querySelector('section.fa_together');
const fault_list = document.querySelector('.appointment #fault_list');
const price_list = document.querySelector('.appointment #price_list');
const total_list = document.querySelector('.appointment .pt-2 #total_price');
const remove_h5 = document.querySelectorAll('.appointment #fault_list h5');
const addbtn = document.querySelectorAll('.fa_together .owl-carousel .mobile_center button');
const mobile_center = document.querySelectorAll('.fa_together .owl-carousel .mobile_center');
const h5text = document.querySelectorAll('.fa_together .owl-carousel .mobile_center h5');
const ptext = document.querySelectorAll('.fa_together .owl-carousel .mobile_center p');
const pspan = document.querySelectorAll('.fa_together .owl-carousel .mobile_center span');
const proceed_btn = document.querySelector('.appointment .float-right button.proceed');
const prev_btn = document.querySelector('.sell_mobile .float-left button.prev-btn');

mycollapse.forEach((val)=>
{
    val.addEventListener('click', (event)=>
    {
        let target=event.target.getAttribute('data-target');
        console.log(target);
        appointment.querySelector(target).classList.toggle('active');
    })
})

addbtn.forEach((val,ind)=>
{ 
   val.addEventListener('click',(event)=>
   {
       let x = h5text[ind].innerHTML;
       let h5 = document.createElement('h5');
       let remove_btn = document.createElement('button');
       let mt_3 = document.createElement('div');

       if(x=='Tap repair')
       {
          h5.setAttribute('class', 'mt-4 tap-repair');
          mt_3.setAttribute('class','mt-3 tap-repair');
          remove_btn.setAttribute('id','tap');
       }
       else if(x=='Water jet spray')
       {
          h5.setAttribute('class', 'mt-4 water-jet');
          mt_3.setAttribute('class','mt-3 water-jet');
          remove_btn.setAttribute('id','water');
       }
       else if(x=='Flush tank repair(external-PVC)')
       {
          h5.setAttribute('class', 'mt-4 flush-tank');
          mt_3.setAttribute('class','mt-3 flush-tank');
          remove_btn.setAttribute('id','flush');
       }
       else if(x=='Drainage pipe blockage')
       {
          h5.setAttribute('class', 'mt-4 drain-pipe');
          mt_3.setAttribute('class','mt-3 drain-pipe');
          remove_btn.setAttribute('id','drain');
       }
       else if(x=='Tap replacement')
       {
          h5.setAttribute('class', 'mt-4 tap-replace');
          mt_3.setAttribute('class','mt-3 tap-replace');
          remove_btn.setAttribute('id','tap_rep');
       }
       addh5(h5,x);

       let y = ptext[ind].innerHTML;
       let z = pspan[ind].innerHTML;

       let span = document.createElement('span');
       let ztext = document.createTextNode(z);
       span.appendChild(ztext);
       let p = document.createElement('p');
       p.setAttribute('class','d-inline');
       let ytext = document.createTextNode(y);
       p.appendChild(ytext);

       mt_3.appendChild(span);
       mt_3.appendChild(p);
       price_list.appendChild(mt_3);
       remove_btn.setAttribute('class','btn');
       let remove_text = document.createTextNode('Remove');
       remove_btn.appendChild(remove_text);
       mt_3.appendChild(remove_btn);
       price_list.appendChild(mt_3);
       totalprice();
       window.scrollTo(
            {
               top:70,
               left : 0,
            });

    const remove_all1 = document.querySelectorAll('.appointment #price_list button#tap');
    const remove_all2 = document.querySelectorAll('.appointment #price_list button#water');
    const remove_all3 = document.querySelectorAll('.appointment #price_list button#flush');
    const remove_all4 = document.querySelectorAll('.appointment #price_list button#drain');
    const remove_all5 = document.querySelectorAll('.appointment #price_list button#tap_rep');

        remove_all1.forEach((val)=>
        {
            val.addEventListener('click',removeTap);
        })
        remove_all2.forEach((val)=>
        {
            val.addEventListener('click',removeWater);
        })
        remove_all3.forEach((val)=>
        {
            val.addEventListener('click',removeFlush);
        })
        remove_all4.forEach((val)=>
        {
            val.addEventListener('click',removeDrainage);
        })
        remove_all5.forEach((val)=>
        {
            val.addEventListener('click',removeTapreplace);
        })
  }) 
})

function removeTap()
{      
    let delh5 = document.querySelectorAll('.appointment #fault_list .tap-repair');
    let deldiv = document.querySelectorAll('.appointment #price_list .tap-repair');
    removeSelectedNode(delh5,deldiv);
    totalprice(); 
}

function removeWater(val,ind)
{
      let delh5 = document.querySelectorAll('.appointment #fault_list .water-jet');
      let deldiv = document.querySelectorAll('.appointment #price_list .water-jet');
      removeSelectedNode(delh5,deldiv);
      totalprice();         
}

function removeFlush(val,ind)
{
      let delh5 = document.querySelectorAll('.appointment #fault_list .flush-tank');
      let deldiv = document.querySelectorAll('.appointment #price_list .flush-tank');
      removeSelectedNode(delh5,deldiv);
      totalprice();       
}

function removeDrainage(val,ind)
{    
    let delh5 = document.querySelectorAll('.appointment #fault_list .drain-pipe');
    let deldiv = document.querySelectorAll('.appointment #price_list .drain-pipe');
    removeSelectedNode(delh5,deldiv);
    totalprice();        
}

function removeTapreplace(val,ind)
{
      let delh5 = document.querySelectorAll('.appointment #fault_list .tap-replace');
      let deldiv = document.querySelectorAll('.appointment #price_list .tap-replace');
      removeSelectedNode(delh5,deldiv);
      totalprice();

}
function totalprice()
{
   let para_price = document.querySelectorAll('.appointment .right_div p.d-inline');
   let sum=0;

   for(let i=0;i<para_price.length;i++)
   {
      let x = +para_price[i].innerHTML;
      sum+=x;
   }
   total_list.innerHTML=sum;
}
totalprice();

function removeSelectedNode(delh5,deldiv)
{
    let lasth5child = delh5[delh5.length -1];
    let lastdeldiv = deldiv[deldiv.length -1];
    lasth5child.remove();
    lastdeldiv.remove();
}
function addh5(h5,x)
{
    let text = document.createTextNode(x);
    h5.appendChild(text);
    fault_list.appendChild(h5);
}
proceed_btn.addEventListener('click',()=>
{
    if(!appointment.classList.contains('section_active') && !fa_together.classList.contains('section_active'))
    {
       appointment.classList.add('section_active');
       form_section.classList.remove('section_active');
    }
    else
    {
        form_section.classList.add('section_active');
        appointment.classList.remove('section_active');
        fa_together.classList.remove('section_active');
        window.scrollTo(
            {
               top:20,
               left : 0,
            });
    }
})
prev_btn.addEventListener('click',()=>
{
    if(!appointment.classList.contains('section_active') && !fa_together.classList.contains('section_active'))
    {
       appointment.classList.add('section_active');
        fa_together.classList.add('section_active');
        form_section.classList.remove('section_active');
        window.scrollTo(
            {
               top:50,
               left : 0,
            });
    }
})

$(document).ready(function()
        {
            $('.owl-carousel').owlCarousel(
                {
                    autoplay:true,
                    autoplayHoverPause: true,
                    items:2,
                    nav:true,
                    margin : 30,
                    autoplayHoverPause:false,
                    loop:true,
                    responsive:
                    {
                        0:
                        {
                            items:2,
                            dots:false
                        },
                        485:
                        {
                            items:3,
                            dots:false
                        },
                        728:
                        {
                            items:4,
                            dots:false
                        },
                        960:
                        {
                            items:5,
                            dots:false
                        },
                        1200:
                        {
                            items:4,
                            dots:false
                        },
                    }
                });
        })