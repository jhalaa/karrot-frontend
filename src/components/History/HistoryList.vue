<script>
import { connect } from 'vuex-connect'
import HistoryListUI from '@/components/History/HistoryListUI'

export default connect({
  gettersToProps: {
    history: 'history/all',
    status: 'history/fetchFilteredStatus',
    canFetchPast: 'history/canFetchPast',
    fetchPastStatus: 'history/fetchPastStatus',
  },
  actionsToProps: {
    fetchPast: 'history/fetchPast',
  },
})('History', HistoryListUI)
</script>
