    const btn = document.querySelectorAll('.left-tab .div-left .btn');
    const leftTab = document.querySelector('.left-tab');
    const left_div = document.querySelector('.div-left');
    const right_div = document.querySelector('.div-right');
    const content = document.querySelectorAll('.left-tab .div-right .btn-div');
    const li = document.querySelectorAll('.left-tab .div-right .btn-div ul.main_tab li');
    const tabcontent = document.querySelectorAll('.left-tab .div-right .btn-div .tab-content');
    const btnadd = document.querySelectorAll('.left-tab .div-right .btn-div .tab-content .add-div .mypagination li#fa_add');
    const btnminus = document.querySelectorAll('.left-tab .div-right .btn-div .tab-content .add-div .mypagination li#fa_minus');
    const add_number = document.querySelectorAll('.left-tab .div-right #add_number');
    const price_div = document.querySelector('.price-div');
    const newpara = document.querySelector('.price-div .new-para');
    const newspan = document.querySelector('.price-div .new-span');
    const total = document.querySelector('.price-div .total_price p');
    const price_minimize = document.querySelector('.price-div i.fa-close');
    const priceclose_btn = document.querySelector('.price-div button.close-btn');
    let sum=0, c=0,workadd1=0,workadd2=0,workadd3=0,workadd4=0,workadd5=0,workadd6=0,workadd7=0,workadd8=0,workadd9=0,workadd10=0,
    workadd11=0,workadd12=0,workadd13=0,workadd14=0,workadd15=0,workadd16=0,workadd17=0,workadd18=0,workadd19=0,workadd20=0;
    workadd21=0;workadd22=0;workadd23=0;workadd24=0;workadd25=0;workadd26=0;workadd27=0;workadd28=0;workadd29=0;workadd30=0;
    workadd31=0;workadd32=0;workadd33=0;workadd34=0;workadd35=0;workadd36=0;workadd37=0;workadd38=0;workadd39=0;workadd40=0;
    workadd41=0;workadd42=0;workadd43=0;

    for(let i=0;i<btnadd.length;i++)
    {
        btnadd[i].addEventListener('click', ()=>
        {
            let h4 = right_div.querySelector('.btn-div.active .tab-content.active .add-div h4').innerHTML;
            let p = right_div.querySelector('.btn-div.active .tab-content.active .add-div h6#number').innerHTML;

            if(c==0)
            {
                price_div.classList.add('active');
                c++;
            }
            let pricenumber = parseInt(p);
            sum=sum+pricenumber;
            total.innerHTML=`&#8377; ${sum}`; 

            let newp = document.createElement('p');
            // newp.setAttribute('class', 'para_dynamic');
            createpara(newp,h4);

            let span = document.createElement('span');
            // span.setAttribute('class', 'span_dynamic');
            createspan(span,p);

            for(let j=0;j<add_number.length;j++)
            {
              if(h4==="Waste pipe leakage")
              {
                workadd1 += 1;
                newp.setAttribute('class','para_dynamic waste_pipe');
                span.setAttribute('class', 'span_dynamic waste_pipe');
                add_number[0].innerHTML=workadd1;
                break;
              }
              else if(h4==="Wash basin blackage removal")
              {
                workadd2 += 1;
                newp.setAttribute('class','para_dynamic wash_blockage');
                span.setAttribute('class', 'span_dynamic wash_blockage');
                add_number[1].innerHTML=workadd2;
                break;
              }
              else if(h4==="Wash Basin installation")
              {
                workadd3 += 1;
                newp.setAttribute('class','para_dynamic wash_basin');
                span.setAttribute('class', 'span_dynamic wash_basin');
                add_number[2].innerHTML=workadd3;
                break;
              }
              else if(h4==="minor fitting installation")
              {
                workadd4 += 1;
                newp.setAttribute('class','para_dynamic minor_fitting');
                span.setAttribute('class', 'span_dynamic minor_fitting');
                add_number[3].innerHTML=workadd4;
                break;
              }
              else if(h4==="shower installation(wall)")
              {
                workadd5 += 1;
                newp.setAttribute('class','para_dynamic shower_wall');
                span.setAttribute('class', 'span_dynamic shower_wall');
                add_number[4].innerHTML=workadd5;
                break;
              }
              else if(h4==="shower installtion(ceiling)")
              {
                workadd6 += 1;
                newp.setAttribute('class','para_dynamic shower_ceiling');
                span.setAttribute('class', 'span_dynamic shower_ceiling');
                add_number[5].innerHTML=workadd6;
                break;
              }
              else if(h4==="blockage removal(underground)")
              {
                workadd7 += 1;
                newp.setAttribute('class','para_dynamic blockage_underground');
                span.setAttribute('class', 'span_dynamic blockage_underground');
                add_number[6].innerHTML=workadd7;
                break;
              }
              else if(h4==="blockage removal(basin or sink)")
              {
                workadd8 += 1;
                newp.setAttribute('class','para_dynamic blockage_basin');
                span.setAttribute('class','span_dynamic blockage_basin');
                add_number[7].innerHTML=workadd8;
                break;
              }
              else if(h4==="blockage removal toilet pot")
              {
                workadd9 += 1;
                newp.setAttribute('class','para_dynamic toilet_pot');
                span.setAttribute('class','span_dynamic toilet_pot');
                add_number[8].innerHTML=workadd9;
                break;
              }
              else if(h4==="blockage removal balcony")
              {
                workadd10 += 1;
                newp.setAttribute('class','para_dynamic removal_balcony');
                span.setAttribute('class','span_dynamic removal_balcony');
                add_number[9].innerHTML=workadd10;
                break;
              }
              else if(h4==="drain cover installation")
              {
                workadd11 += 1;
                newp.setAttribute('class','para_dynamic drain_cover');
                span.setAttribute('class','span_dynamic drain_cover');
                add_number[10].innerHTML=workadd11;
                break;
              }
              else if(h4==="Flush tank repair(ceramic)")
              {
                workadd12 += 1;
                newp.setAttribute('class','para_dynamic flush_ceramic');
                span.setAttribute('class','span_dynamic flush_ceramic');
                add_number[11].innerHTML=workadd12;
                break;
              }
              else if(h4==="flush tank repair(PVC)")
              {
                workadd13 += 1;
                newp.setAttribute('class','para_dynamic flush_pvc');
                span.setAttribute('class','span_dynamic flush_pvc');
                add_number[12].innerHTML=workadd13;
                break;
              }
               else if(h4==="Flush tank repair(concealed)")
              {
                workadd14 += 1;
                newp.setAttribute('class','para_dynamic flush_concealed');
                span.setAttribute('class','span_dynamic flush_concealed');
                add_number[13].innerHTML=workadd14;
                break;
              }
              else if(h4==="Western toilet installation(floor)")
              {
                workadd15 += 1;
                newp.setAttribute('class','para_dynamic western_floor');
                span.setAttribute('class','span_dynamic western_floor');
                add_number[14].innerHTML=workadd15;
                break;
              }
              else if(h4==="Western toilet installation(wall)")
              {
                workadd16 += 1;
                newp.setAttribute('class','para_dynamic western_wall');
                span.setAttribute('class','span_dynamic western_wall');
                add_number[15].innerHTML=workadd16;
                break;
              }
              else if(h4==="Western toilet repair(floor)")
              {
                workadd17 += 1;
                newp.setAttribute('class','para_dynamic westernrepair_floor');
                span.setAttribute('class','span_dynamic westernrepair_floor');
                add_number[16].innerHTML=workadd17;
                break;
              }
              else if(h4==="Western toilet replacement(floor)")
              {
                workadd18 += 1;
                newp.setAttribute('class','para_dynamic westernreplace_floor');
                span.setAttribute('class','span_dynamic westernreplace_floor');
                add_number[17].innerHTML=workadd18;
                break;
              }
              else if(h4==="Western toilet replacement(wall)")
              {
                workadd19 += 1;
                newp.setAttribute('class','para_dynamic westernreplace_wall');
                span.setAttribute('class','span_dynamic westernreplace_wall');
                add_number[18].innerHTML=workadd19;
                break;
              }
              else if(h4==="indian toilet installation")
              {
                workadd20 += 1;
                newp.setAttribute('class','para_dynamic indian_toilet');
                span.setAttribute('class','span_dynamic indian_toilet');
                add_number[19].innerHTML=workadd20;
                break;
              }
              else if(h4==="flush tank replacement")
              {
                workadd21 += 1;
                newp.setAttribute('class','para_dynamic flush_replace');
                span.setAttribute('class','span_dynamic flush_replace');
                add_number[20].innerHTML=workadd21;
                break;
              }
              else if(h4==="toilet pot blockage removal")
              {
                workadd22 += 1;
                newp.setAttribute('class','para_dynamic toiletblockage_pot');
                span.setAttribute('class','span_dynamic toiletblockage_pot');
                add_number[21].innerHTML=workadd22;
                break;
              }
              else if(h4==="toilet seat cover")
              {
                workadd23 += 1;
                newp.setAttribute('class','para_dynamic toilet_cover');
                span.setAttribute('class','span_dynamic toilet_cover');
                add_number[22].innerHTML=workadd23;
                break;
              }
              else if(h4==="Water jet spray")
              {
                workadd24 += 1;
                newp.setAttribute('class','para_dynamic water_jet');
                span.setAttribute('class','span_dynamic water_jet');
                add_number[23].innerHTML=workadd24;
                break;
              }
              else if(h4==="Hot and cold water mixer repair")
              {
                workadd25 += 1;
                newp.setAttribute('class','para_dynamic hotcold_repair');
                span.setAttribute('class','span_dynamic hotcold_repair');
                add_number[24].innerHTML=workadd25;
                break;
              }
              else if(h4==="Hot and cold water mixer installation")
              {
                workadd26 += 1;
                newp.setAttribute('class','para_dynamic hotcold_install');
                span.setAttribute('class','span_dynamic hotcold_install');
                add_number[25].innerHTML=workadd26;
                break;
              }
              else if(h4==="Tap repair")
              {
                workadd27 += 1;
                newp.setAttribute('class','para_dynamic tap_repair');
                span.setAttribute('class','span_dynamic tap_repair');
                add_number[26].innerHTML=workadd27;
                break;
              }
              else if(h4==="Tap installation")
              {
                workadd28 += 1;
                newp.setAttribute('class','para_dynamic tap_installation');
                span.setAttribute('class','span_dynamic tap_installation');
                add_number[27].innerHTML=workadd28;
                break;
              }
              else if(h4==="Tap replacement")
              {
                workadd29 += 1;
                newp.setAttribute('class','para_dynamic tap_replacement');
                span.setAttribute('class','span_dynamic tap_replacement');
                add_number[28].innerHTML=workadd29;
                break;
              }
              else if(h4==="Overhead tank installation(upto 500L)")
              {
                workadd30 += 1;
                newp.setAttribute('class','para_dynamic overhead_500');
                span.setAttribute('class','span_dynamic overhead_500');
                add_number[29].innerHTML=workadd30;
                break;
              }
              else if(h4==="Overhead tank installation(500L-2000L)")
              {
                workadd31 += 1;
                newp.setAttribute('class','para_dynamic overhead_5002000');
                span.setAttribute('class','span_dynamic overhead_5002000');
                add_number[30].innerHTML=workadd31;
                break;
              }
              else if(h4==="Overhead tank cleaning(upto 1000L)")
              {
                workadd32 += 1;
                newp.setAttribute('class','para_dynamic overhead_clean1000');
                span.setAttribute('class','span_dynamic overhead_clean1000');
                add_number[31].innerHTML=workadd32;
                break;
              }
              else if(h4==="Overhead tank cleaning(1000L-2000L)")
              {
                workadd33 += 1;
                newp.setAttribute('class','para_dynamic overhead_clean10002000');
                span.setAttribute('class','span_dynamic overhead_clean10002000');
                add_number[32].innerHTML=workadd33;
                break;
              }
              else if(h4==="Underground tank cleaning(1000L-1500L)")
              {
                workadd34 += 1;
                newp.setAttribute('class','para_dynamic underg_clean10001500');
                span.setAttribute('class','span_dynamic underg_clean10001500');
                add_number[33].innerHTML=workadd34;
                break;
              }
              else if(h4==="Underground tank cleaning(1500L-3000L)")
              {
                workadd35 += 1;
                newp.setAttribute('class','para_dynamic underg_clean15003000');
                span.setAttribute('class','span_dynamic underg_clean15003000');
                add_number[34].innerHTML=workadd35;
                break;
              }
              else if(h4==="Pipeline Leakage repair")
              {
                workadd36 += 1;
                newp.setAttribute('class','para_dynamic pipe_leak');
                span.setAttribute('class','span_dynamic pipe_leak');
                add_number[35].innerHTML=workadd36;
                break;
              }
              else if(h4==="Water meter installation")
              {
                workadd37 += 1;
                newp.setAttribute('class','para_dynamic water_meter');
                span.setAttribute('class','span_dynamic water_meter');
                add_number[36].innerHTML=workadd37;
                break;
              }
              else if(h4==="motor installation")
              {
                workadd38 += 1;
                newp.setAttribute('class','para_dynamic motor_install');
                span.setAttribute('class','span_dynamic motor_install');
                add_number[37].innerHTML=workadd38;
                break;
              }
              else if(h4==="Motor replacement")
              {
                workadd39 += 1;
                newp.setAttribute('class','para_dynamic motor_replace');
                span.setAttribute('class','span_dynamic motor_replace');
                add_number[38].innerHTML=workadd39;
                break;
              }
              else if(h4==="Motor air cavity removal")
              {
                workadd40 += 1;
                newp.setAttribute('class','para_dynamic motor_cavity');
                span.setAttribute('class','span_dynamic motor_cavity');
                add_number[39].innerHTML=workadd40;
                break;
              }
              else if(h4==="connection hose")
              {
                workadd41 += 1;
                newp.setAttribute('class','para_dynamic conn_hose');
                span.setAttribute('class','span_dynamic conn_hose');
                add_number[40].innerHTML=workadd41;
                break;
              }
              else if(h4==="washing machine inlet")
              {
                workadd42 += 1;
                newp.setAttribute('class','para_dynamic wash_machineinlet');
                span.setAttribute('class','span_dynamic wash_machineinlet');
                add_number[41].innerHTML=workadd42;
                break;
              }
              else if(h4==="looking for something else")
              {
                workadd43 += 1;
                newp.setAttribute('class','para_dynamic look_some');
                span.setAttribute('class','span_dynamic look_some');
                add_number[42].innerHTML=workadd43;
                break;
              }

            }

        })
    }

    function createpara(newp,h4)
    {
        let textp = document.createTextNode(h4)
        newp.appendChild(textp)
        newpara.appendChild(newp);
    }

    function createspan(span,p)
    {
        let textspan = document.createTextNode(p);
        span.appendChild(textspan);
        newspan.appendChild(span);
    }

    for(let i=0;i<btnminus.length;i++)
    {
        btnminus[i].addEventListener('click', (event)=>
        {
            let p = document.querySelector('.price-div .new-para');
            let span = document.querySelector('.price-div .new-span');
            let h4 = right_div.querySelector('.btn-div.active .tab-content.active .add-div h4').innerHTML;
            let spanprice = document.querySelectorAll('.price-div .new-span span');
            // let span = right_div.querySelectorAll('.price-div .new-para ');


            if(!p.hasChildNodes() && !span.hasChildNodes())
            {
                alert('Negative values not allowed');
                price_div.classList.remove('active');
                return;
            }
            
            for(let j=0;j<add_number.length;j++)
            {
              if(h4==="Waste pipe leakage")
              {
                if(workadd1==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .waste_pipe');
               let spanpipe = document.querySelectorAll('.price-div .new-span .waste_pipe');
               removechildNode(ppipe,spanpipe);
                workadd1 -= 1;
                add_number[0].innerHTML=workadd1;
                break;
              }
              else if(h4==="Wash basin blackage removal")
              {
                if(workadd2==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .wash_blockage');
               let spanpipe = document.querySelectorAll('.price-div .new-span .wash_blockage');
               removechildNode(ppipe,spanpipe);
                workadd2 -= 1;
                add_number[1].innerHTML=workadd2;
                break;
              }
              else if(h4==="Wash Basin installation")
              {
                 if(workadd3==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .wash_basin');
               let spanpipe = document.querySelectorAll('.price-div .new-span .wash_basin');
               removechildNode(ppipe,spanpipe);
                workadd3 -= 1;
                add_number[2].innerHTML=workadd3;
                break;
              }
              else if(h4==="minor fitting installation")
              {
                if(workadd4==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .minor_fitting');
               let spanpipe = document.querySelectorAll('.price-div .new-span .minor_fitting');
               removechildNode(ppipe,spanpipe);
                workadd4 -= 1;
                add_number[3].innerHTML=workadd4;
                break;
              }
              else if(h4==="shower installation(wall)")
              {
                if(workadd5==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .shower_wall');
               let spanpipe = document.querySelectorAll('.price-div .new-span .shower_wall');
               removechildNode(ppipe,spanpipe);
                workadd5 -= 1;
                add_number[4].innerHTML=workadd5;
                break;
              }
              else if(h4==="shower installtion(ceiling)")
              {
                if(workadd6==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .shower_ceiling');
               let spanpipe = document.querySelectorAll('.price-div .new-span .shower_ceiling');
               removechildNode(ppipe,spanpipe);
                workadd6 -= 1;
                add_number[5].innerHTML=workadd6;
                break;
              }
              else if(h4==="blockage removal(underground)")
              {
                if(workadd7==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .blockage_underground');
               let spanpipe = document.querySelectorAll('.price-div .new-span .blockage_underground');
               removechildNode(ppipe,spanpipe);
                workadd7 -= 1;
                add_number[6].innerHTML=workadd7;
                break;
              }
              else if(h4==="blockage removal(basin or sink)")
              {
                if(workadd8==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .blockage_basin');
               let spanpipe = document.querySelectorAll('.price-div .new-span .blockage_basin');
               removechildNode(ppipe,spanpipe);
                workadd8 -= 1;
                add_number[7].innerHTML=workadd8;
                break;
              }
              else if(h4==="blockage removal toilet pot")
              {
                if(workadd9==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .toilet_pot');
               let spanpipe = document.querySelectorAll('.price-div .new-span .toilet_pot');
               removechildNode(ppipe,spanpipe);
                workadd9 -= 1;
                add_number[8].innerHTML=workadd9;
                break;
              }
              else if(h4==="blockage removal balcony")
              {
                if(workadd10==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .removal_balcony');
               let spanpipe = document.querySelectorAll('.price-div .new-span .removal_balcony');
               removechildNode(ppipe,spanpipe);
                workadd10 -= 1;
                add_number[9].innerHTML=workadd10;
                break;
              }
              else if(h4==="drain cover installation")
              {
                if(workadd11==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .drain_cover');
               let spanpipe = document.querySelectorAll('.price-div .new-span .drain_cover');
               removechildNode(ppipe,spanpipe);
                workadd11 -= 1;
                add_number[10].innerHTML=workadd11;
                break;
              }
              else if(h4==="Flush tank repair(ceramic)")
              {
                if(workadd12==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .flush_ceramic');
               let spanpipe = document.querySelectorAll('.price-div .new-span .flush_ceramic');
               removechildNode(ppipe,spanpipe);
                workadd12 -= 1;
                add_number[11].innerHTML=workadd12;
                break;
              }
              else if(h4==="flush tank repair(PVC)")
              {
                if(workadd13==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .flush_pvc');
                let spanpipe = document.querySelectorAll('.price-div .new-span .flush_pvc');
                removechildNode(ppipe,spanpipe);
                workadd13 -= 1;
                add_number[12].innerHTML=workadd13;
                break;
              }
              else if(h4==="Flush tank repair(concealed)")
              {
                if(workadd14==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .flush_concealed');
                let spanpipe = document.querySelectorAll('.price-div .new-span .flush_concealed');
                removechildNode(ppipe,spanpipe);
                workadd14 -= 1;
                add_number[13].innerHTML=workadd14;
                break;
              }
              else if(h4==="Western toilet installation(floor)")
              {
                if(workadd15==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .western_floor');
                let spanpipe = document.querySelectorAll('.price-div .new-span .western_floor');
                removechildNode(ppipe,spanpipe);
                workadd15 -= 1;
                add_number[14].innerHTML=workadd15;
                break;
              }
              else if(h4==="Western toilet installation(wall)")
              {
               if(workadd16==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .western_wall');
                let spanpipe = document.querySelectorAll('.price-div .new-span .western_wall');
                removechildNode(ppipe,spanpipe);
                workadd16 -= 1;
                add_number[15].innerHTML=workadd16;
                break;
              }
               else if(h4==="Western toilet repair(floor)")
              {
                if(workadd17==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .westernrepair_floor');
                let spanpipe = document.querySelectorAll('.price-div .new-span .westernrepair_floor');
                removechildNode(ppipe,spanpipe);
                workadd17 -= 1;
                add_number[16].innerHTML=workadd17;
                break;
              }
              else if(h4==="Western toilet replacement(floor)")
              {
                if(workadd18==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .westernreplace_floor');
                let spanpipe = document.querySelectorAll('.price-div .new-span .westernreplace_floor');
                removechildNode(ppipe,spanpipe);
                workadd18 -= 1;
                add_number[17].innerHTML=workadd18;
                break;
              }
              else if(h4==="Western toilet replacement(wall)")
              {
                if(workadd19==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .westernreplace_wall');
                let spanpipe = document.querySelectorAll('.price-div .new-span .westernreplace_wall');
                removechildNode(ppipe,spanpipe);
                workadd19 -= 1;
                add_number[18].innerHTML=workadd19;
                break;
              }
              else if(h4==="indian toilet installation")
              {
                if(workadd20==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .indian_toilet');
                let spanpipe = document.querySelectorAll('.price-div .new-span .indian_toilet');
                removechildNode(ppipe,spanpipe);
                workadd20 -= 1;
                add_number[19].innerHTML=workadd20;
                break;
              }
              else if(h4==="flush tank replacement")
              {
                if(workadd21==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .flush_replace');
                let spanpipe = document.querySelectorAll('.price-div .new-span .flush_replace');
                removechildNode(ppipe,spanpipe);
                workadd21 -= 1;
                add_number[20].innerHTML=workadd21;
                break;
              }
              else if(h4==="toilet pot blockage removal")
              {
                if(workadd22==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .toiletblockage_pot');
                let spanpipe = document.querySelectorAll('.price-div .new-span .toiletblockage_pot');
                removechildNode(ppipe,spanpipe);
                workadd22 -= 1;
                add_number[21].innerHTML=workadd22;
                break;
              }
              else if(h4==="toilet seat cover")
              {
                if(workadd23==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .toilet_cover');
                let spanpipe = document.querySelectorAll('.price-div .new-span .toilet_cover');
                removechildNode(ppipe,spanpipe);
                workadd23 -= 1;
                add_number[22].innerHTML=workadd23;
                break;
              }
              else if(h4==="Water jet spray")
              {
                if(workadd24==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .water_jet');
                let spanpipe = document.querySelectorAll('.price-div .new-span .water_jet');
                removechildNode(ppipe,spanpipe);
                workadd24 -= 1;
                add_number[23].innerHTML=workadd24;
                break;
              }
              else if(h4==="Hot and cold water mixer repair")
              {
                if(workadd25==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .hotcold_repair');
                let spanpipe = document.querySelectorAll('.price-div .new-span .hotcold_repair');
                removechildNode(ppipe,spanpipe);
                workadd25 -= 1;
                add_number[24].innerHTML=workadd25;
                break;
              }
              else if(h4==="Hot and cold water mixer installation")
              {
                if(workadd26==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .hotcold_install');
                let spanpipe = document.querySelectorAll('.price-div .new-span .hotcold_install');
                removechildNode(ppipe,spanpipe);
                workadd26 -= 1;
                add_number[25].innerHTML=workadd26;
                break;
              }
              else if(h4==="Tap repair")
              {
               if(workadd27==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .tap_repair');
                let spanpipe = document.querySelectorAll('.price-div .new-span .tap_repair');
                removechildNode(ppipe,spanpipe);
                workadd27 -= 1;
                add_number[26].innerHTML=workadd27;
                break;
              }
              else if(h4==="Tap installation")
              {
                if(workadd28==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .tap_installation');
                let spanpipe = document.querySelectorAll('.price-div .new-span .tap_installation');
                removechildNode(ppipe,spanpipe);
                workadd28 -= 1;
                add_number[27].innerHTML=workadd28;
                break;
              }
              else if(h4==="Tap replacement")
              {
                if(workadd29==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .tap_replacement');
                let spanpipe = document.querySelectorAll('.price-div .new-span .tap_replacement');
                removechildNode(ppipe,spanpipe);
                workadd29 -= 1;
                add_number[28].innerHTML=workadd29;
                break;
              }
              else if(h4==="Overhead tank installation(upto 500L)")
              {
                if(workadd30==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .overhead_500');
                let spanpipe = document.querySelectorAll('.price-div .new-span .overhead_500');
                removechildNode(ppipe,spanpipe);
                workadd30 -= 1;
                add_number[29].innerHTML=workadd30;
                break;
              }
              else if(h4==="Overhead tank installation(500L-2000L)")
              {
                if(workadd31==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .overhead_5002000');
                let spanpipe = document.querySelectorAll('.price-div .new-span .overhead_5002000');
                removechildNode(ppipe,spanpipe);
                workadd31 -= 1;
                add_number[30].innerHTML=workadd31;
                break;
              }
              else if(h4==="Overhead tank cleaning(upto 1000L)")
              {
                if(workadd32==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .overhead_clean1000');
                let spanpipe = document.querySelectorAll('.price-div .new-span .overhead_clean1000');
                removechildNode(ppipe,spanpipe);
                workadd32 -= 1;
                add_number[31].innerHTML=workadd32;
                break;
              }
              else if(h4==="Overhead tank cleaning(1000L-2000L)")
              {
                if(workadd33==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .overhead_clean10002000');
                let spanpipe = document.querySelectorAll('.price-div .new-span .overhead_clean10002000');
                removechildNode(ppipe,spanpipe);
                workadd33 -= 1;
                add_number[32].innerHTML=workadd33;
                break;
              }
              else if(h4==="Underground tank cleaning(1000L-1500L)")
              {
                if(workadd34==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .underg_clean10001500');
                let spanpipe = document.querySelectorAll('.price-div .new-span .underg_clean10001500');
                removechildNode(ppipe,spanpipe);
                workadd34 -= 1;
                add_number[33].innerHTML=workadd34;
                break;
              }
              else if(h4==="Underground tank cleaning(1500L-3000L)")
              {
                if(workadd35==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .underg_clean15003000');
                let spanpipe = document.querySelectorAll('.price-div .new-span .underg_clean15003000');
                removechildNode(ppipe,spanpipe);
                workadd35 -= 1;
                add_number[34].innerHTML=workadd35;
                break;
              }
              else if(h4==="Pipeline Leakage repair")
              {
                if(workadd36==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .pipe_leak');
                let spanpipe = document.querySelectorAll('.price-div .new-span .pipe_leak');
                removechildNode(ppipe,spanpipe);
                workadd36 -= 1;
                add_number[35].innerHTML=workadd36;
                break;
              }
              else if(h4==="Water meter installation")
              {
                if(workadd37==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .water_meter');
                let spanpipe = document.querySelectorAll('.price-div .new-span .water_meter');
                removechildNode(ppipe,spanpipe);
                workadd37 -= 1;
                add_number[36].innerHTML=workadd37;
                break;
              }
              else if(h4==="motor installation")
              {
                if(workadd38==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .motor_install');
                let spanpipe = document.querySelectorAll('.price-div .new-span .motor_install');
                removechildNode(ppipe,spanpipe);
                workadd38 -= 1;
                add_number[37].innerHTML=workadd38;
                break;
              }
              else if(h4==="Motor replacement")
              {
                if(workadd39==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .motor_replace');
                let spanpipe = document.querySelectorAll('.price-div .new-span .motor_replace');
                removechildNode(ppipe,spanpipe);
                workadd39 -= 1;
                add_number[38].innerHTML=workadd39;
                break;
              }
              else if(h4==="Motor air cavity removal")
              {
               if(workadd40==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .motor_cavity');
                let spanpipe = document.querySelectorAll('.price-div .new-span .motor_cavity');
                removechildNode(ppipe,spanpipe);
                workadd40 -= 1;
                add_number[39].innerHTML=workadd40;
                break;
              }
              else if(h4==="connection hose")
              {
                if(workadd41==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .conn_hose');
                let spanpipe = document.querySelectorAll('.price-div .new-span .conn_hose');
                removechildNode(ppipe,spanpipe);
                workadd41 -= 1;
                add_number[40].innerHTML=workadd41;
                break;
              }
              else if(h4==="washing machine inlet")
              {
                if(workadd42==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .wash_machineinlet');
                let spanpipe = document.querySelectorAll('.price-div .new-span .wash_machineinlet');
                removechildNode(ppipe,spanpipe);
                workadd42 -= 1;
                add_number[41].innerHTML=workadd42;
                break;
              }
              else if(h4==="looking for something else")
              {
                if(workadd43==0)
                {
                    alert('Negative values not allowed');
                    totalsum();
                    return;
                }
                let ppipe = document.querySelectorAll('.price-div .new-para .look_some');
                let spanpipe = document.querySelectorAll('.price-div .new-span .look_some');
                removechildNode(ppipe,spanpipe);
                workadd43 -= 1;
                add_number[42].innerHTML=workadd43;
                break;
              }
            }
            // removechildNode(p,span,spanprice);
            totalsum();
            
        })
    }

    function totalsum()
    {
        total.innerHTML=`&#8377; ${sum}`;
        if(sum==0)
        {
            price_div.classList.remove('active');
            c--;
        }
    }

    function removechildNode(p,span)
    {
        let lastspan = span[span.length-1].innerHTML;
        sum = sum-lastspan;
        let removelastpara=p[p.length-1];
        removelastpara.remove();
        let removelastspan=span[span.length-1];
        removelastspan.remove();

        // p.removeChild(p.lastChild);
        // span.removeChild(span.lastChild);
    }

// price_minimize.addEventListener('click',()=>
// {
//     price_div.classList.toggle('shrink_height');
//     price_minimize.classList.toggle('fa-folder-open');
//     priceclose_btn.classList.toggle('show');
// })
// priceclose_btn.addEventListener('click',()=>
// {
//     price_div.classList.toggle('shrink_height');
//     price_minimize.classList.toggle('fa-folder-open');
//     priceclose_btn.classList.toggle('show');
// })

    for(let i=0;i<btn.length;i++)
    {
        btn[i].addEventListener('click',(event)=>
        {
           if(event.target.classList.contains('btn') && !event.target.classList.contains('active'))
           {
              let target = event.target.getAttribute('data-target');
              left_div.querySelector('.btn.active').classList.add('outer-shadow','hover-in-shadow'); 
              left_div.querySelector('.btn.active').classList.remove('active'); 
              event.target.classList.add('active');
              event.target.classList.remove('outer-shadow','hover-in-shadow');
              right_div.querySelector('.btn-div.active').classList.remove('active');
              if(target==".something")
              {
                 let btn_target = right_div.querySelector(target);
                 btn_target.classList.add('active');
                 let pactive = btn_target.querySelector('.tab-content');
                 pactive.classList.add('active');
                 return; 
              }
              right_div.querySelector(target).classList.add('active'); 
              let firstli = right_div.querySelector('.btn-div.active').querySelectorAll('ul li');
              let firstp = right_div.querySelector('.btn-div.active').querySelectorAll('.tab-content');
              firstli.forEach((val)=>
              {
                val.classList.remove('active');
              })
              firstp.forEach((val)=>
              {
                val.classList.remove('active');
              })
              firstli[0].classList.add('active');   
              firstp[0].classList.add('active');   
           }
        })
    }

    for(let i=0;i<li.length;i++)
    {
        li[i].addEventListener('click',(event)=>
        {
            let content_active = leftTab.querySelector('.btn-div.active');
            if(content_active.classList.contains('active') && !event.target.classList.contains('active'))
            {
               let target = event.target.getAttribute('data-target');
               content_active.querySelector('li.active').classList.remove('active');
               event.target.classList.add('active');
               content_active.querySelector('.tab-content.active').classList.remove('active');
               content_active.querySelector(target).classList.add('active');
            }
        })
    }
    
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
                            items:1,
                            dots:false
                        },
                        485:
                        {
                            items:2,
                            dots:false
                        },
                        728:
                        {
                            items:3,
                            dots:false
                        },
                        960:
                        {
                            items:3,
                            dots:false
                        },
                        1200:
                        {
                            items:3,
                            dots:false
                        },
                    }
                });
        })
  
$(document).ready(function()
        {
            $('.about--anime1').waypoint(function(direction)
            {
                 $('.about--anime1').addClass('animated fadeInLeft');    
            },
            {
                offset: '650px'
            })
            $('.about--anime2').waypoint(function(direction)
            {
                 $('.about--anime2').addClass('animated fadeInRight');    
            },
            {
                offset: '650px'
            })

            $('.service-anime1').waypoint(function(direction)
            {
                 $('.service-anime1').addClass('animated fadeInUp');    
            },
            {
                offset: '500px'
            })

            $('.service-anime2').waypoint(function(direction)
            {
                 $('.service-anime2').addClass('animated fadeInUp');    
            },
            {
                offset: '500px'
            })

            $('.service-anime3').waypoint(function(direction)
            {
                 $('.service-anime3').addClass('animated fadeInUp');    
            },
            {
                offset: '500px'
            })
            $('.service-anime4').waypoint(function(direction)
            {
                 $('.service-anime4').addClass('animated fadeInUp');    
            },
            {
                offset: '700px'
            })
            $('.service-anime5').waypoint(function(direction)
            {
                 $('.service-anime5').addClass('animated fadeInUp');    
            },
            {
                offset: '700px'
            })
            $('.service-anime6').waypoint(function(direction)
            {
                 $('.service-anime6').addClass('animated fadeInUp');    
            },
            {
                offset: '700px'
            })
            $('.option-animate').waypoint(function(direction)
            {
                 $('.option-animate').addClass('animated fadeInUp');    
            },
            {
                offset: '550px'
            })
            $('.best-animate1').waypoint(function(direction)
            {
                 $('.best-animate1').addClass('animated pulse');    
            },
            {
                offset: '700px'
            })
            $('.best-animate2').waypoint(function(direction)
            {
                 $('.best-animate2').addClass('animated pulse');    
            },
            {
                offset: '700px'
            })
            $('.best-animate3').waypoint(function(direction)
            {
                 $('.best-animate3').addClass('animated pulse');    
            },
            {
                offset: '700px'
            })
            $('.intro-animate').waypoint(function(direction)
            {
                 $('.intro-animate').addClass('animated slideInLeft');    
            },
            {
                offset: '1000px'
            })
            $('.testo-anime').waypoint(function(direction)
            {
                 $('.testo-anime').addClass('animated fadeInUp');    
            },
            {
                offset: '1100px'
            })

            // $('.portfolio-anime1').waypoint(function(direction)
            // {
            //      $('.portfolio-anime1').addClass('animated fadeInUp');    
            // },
            // {
            //     offset: '500px'
            // })
        })