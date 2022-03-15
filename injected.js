
const addPipeline = async () => {
    if (! window.gl) {
        console.error('Cannot find gl object in window, exiting...');
        return;
    }
    
    const gitlab = window.gl;

    const response = await fetch(
        `https://gitlab.com/api/v4/projects/${gitlab.snowplowStandardContext.data.project_id}/merge_requests/${gitlab.mrWidgetData.iid}/pipelines`, 
        { 
            method: "POST",
            credentials: "include",
            headers: {"x-csrf-token": document.getElementsByName('csrf-token')[0].content}
        }
    );

    if (response.ok) {
        window.location.reload();
    }
}

const addPipelineButton = () => {
    const has_pipelines = document.getElementsByClassName('pipelines-tab').length > 0;
    
    if (has_pipelines) {
        console.info('Already has pipeline tab, exiting...');
        return;
    }

    const button = document.createElement('button');
    button.innerHTML = 'Add pipeline';
    button.classList.add('btn', 'btn-confirm', 'btn-md', 'gl-button');
    button.addEventListener('click', addPipeline);

    const tabs = document.getElementsByClassName('merge-request-tabs nav-tabs nav nav-links')[0];
    tabs.appendChild(button);
}

addPipelineButton();