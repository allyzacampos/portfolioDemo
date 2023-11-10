import React from 'react'
import { Grid } from '../Components/Reusable Styles/gridCol'
import { TextCol } from '../Components/Reusable Styles/textCol'
import { H1 } from '../Components/Reusable Styles/H1'
import { Paragraph } from '../Components/Reusable Styles/Paragraph'
import { ParagraphBold } from '../Components/Reusable Styles/ParagraphBold'
import { ToolsCard } from '../Components/ToolsCard'
import { Section } from "../Components/Reusable Styles/Section";

export const SkillsAndExperience = () => {
  return (
    <Section>
        <Grid>
            <TextCol>
                <H1>Skills & Experience</H1>
                <Paragraph>I'm your creative Swiss Army knife, skilled in graphic design, web wizardry, and WordPress magic. I've crafted logos, built beautiful websites, and sprinkled SEO fairy dust to boost online visibility. Let's make your project sparkle!</Paragraph>
                <ParagraphBold>Design Tools</ParagraphBold>
                <ToolsCard />
            </TextCol>
            <TextCol>
            </TextCol>
        </Grid>
    </Section>
  )
}
